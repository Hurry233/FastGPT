import { AppContext } from './context';
import {
  Box,
  Button,
  Flex,
  FormControl,
  Input,
  ModalBody,
  ModalFooter,
  Textarea
} from '@chakra-ui/react';
import type { AppSchemaType } from '@fastgpt/global/core/app/type';
import Avatar from '@fastgpt/web/components/common/Avatar';
import MyModal from '@fastgpt/web/components/common/MyModal';
import { useRequest } from '@fastgpt/web/hooks/useRequest';
import { useToast } from '@fastgpt/web/hooks/useToast';
import { useTranslation } from 'next-i18next';
import React, { useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { useContextSelector } from 'use-context-selector';
import { useUploadAvatar } from '@fastgpt/web/common/file/hooks/useUploadAvatar';
import { getUploadAvatarPresignedUrl } from '@/web/common/file/api';

const InfoModal = ({ onClose }: { onClose: () => void }) => {
  const { t } = useTranslation();
  const { toast } = useToast();
  const { updateAppDetail, appDetail, reloadApp } = useContextSelector(AppContext, (v) => v);

  const { Component: AvatarUploader, handleFileSelectorOpen: handleAvatarSelectorOpen } =
    useUploadAvatar(getUploadAvatarPresignedUrl, {
      onSuccess: (avatar) => setValue('avatar', avatar)
    });

  const {
    register,
    setValue,
    watch,
    formState: { errors },
    handleSubmit
  } = useForm({
    defaultValues: appDetail
  });
  const avatar = watch('avatar');

  // submit config
  const { runAsync: saveSubmitSuccess, loading: btnLoading } = useRequest(
    async (data: AppSchemaType) => {
      await updateAppDetail({
        name: data.name,
        avatar: data.avatar,
        intro: data.intro
      });
    },
    {
      onSuccess() {
        toast({
          title: t('common:update_success'),
          status: 'success'
        });
        reloadApp();
      },
      errorToast: t('common:update_failed')
    }
  );

  const saveSubmitError = useCallback(() => {
    // deep search message
    const deepSearch = (obj: any): string => {
      if (!obj) return t('common:submit_failed');
      if (!!obj.message) {
        return obj.message;
      }
      return deepSearch(Object.values(obj)[0]);
    };
    toast({
      title: deepSearch(errors),
      status: 'error',
      duration: 4000,
      isClosable: true
    });
  }, [errors, t, toast]);

  const saveUpdateModel = useCallback(
    () => handleSubmit((data) => saveSubmitSuccess(data).then(onClose), saveSubmitError)(),
    [handleSubmit, onClose, saveSubmitError, saveSubmitSuccess]
  );

  return (
    <MyModal
      isOpen={true}
      onClose={onClose}
      iconSrc="/imgs/workflow/ai.svg"
      title={t('common:core.app.setting')}
    >
      <ModalBody>
        <Box fontSize={'sm'}>{t('common:core.app.Name and avatar')}</Box>
        <Flex mt={2} alignItems={'center'}>
          <Avatar
            src={avatar}
            w={['26px', '34px']}
            h={['26px', '34px']}
            cursor={'pointer'}
            borderRadius={'md'}
            mr={4}
            title={t('common:set_avatar')}
            onClick={handleAvatarSelectorOpen}
          />
          <FormControl>
            <Input
              bg={'myWhite.600'}
              placeholder={t('common:core.app.Set a name for your app')}
              {...register('name', {
                required: true
              })}
            ></Input>
          </FormControl>
        </Flex>
        <Box mt={4} mb={1} fontSize={'sm'}>
          {t('common:core.app.App intro')}
        </Box>
        <Textarea
          rows={4}
          maxLength={500}
          placeholder={t('common:core.app.Make a brief introduction of your app')}
          bg={'myWhite.600'}
          {...register('intro')}
        />

      </ModalBody>

      <ModalFooter>
        <Button variant={'whiteBase'} mr={3} onClick={onClose}>
          {t('common:Close')}
        </Button>
        <Button isLoading={btnLoading} onClick={saveUpdateModel}>
          {t('common:Save')}
        </Button>
      </ModalFooter>

      <AvatarUploader />
    </MyModal>
  );
};

export default React.memo(InfoModal);
