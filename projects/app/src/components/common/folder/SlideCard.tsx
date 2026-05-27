import { Box, Button, HStack } from '@chakra-ui/react';
import React from 'react';
import MyIcon from '@fastgpt/web/components/common/Icon';
import { FolderIcon } from '@fastgpt/global/common/file/image/constants';
import FormLabel from '@fastgpt/web/components/common/MyBox/FormLabel';
import MyDivider from '@fastgpt/web/components/common/MyDivider';
import { useTranslation } from 'next-i18next';
import PopoverConfirm from '@fastgpt/web/components/common/MyPopover/PopoverConfirm';

const FolderSlideCard = ({
  name,
  intro,
  onEdit,
  onMove,
  deleteTip,
  onDelete,

  managePer
}: {
  refreshDeps?: any[];
  name: string;
  intro?: string;
  onEdit: () => void;
  onMove: () => void;
  deleteTip: string;
  onDelete: () => void;

  managePer?: {
    permission: {
      hasManagePer: boolean;
      isOwner: boolean;
    };
  };

  isInheritPermission?: boolean;
  resumeInheritPermission?: () => Promise<void>;
  hasParent?: boolean;
  refetchResource?: () => Promise<any>;
}) => {
  const { t } = useTranslation();

  return (
    <Box w={'13rem'}>
      <Box>
        <HStack>
          <MyIcon name={FolderIcon} w={'1.5rem'} />
          <Box
            color={'myGray.900'}
            overflow={'hidden'}
            textOverflow={'ellipsis'}
            whiteSpace={'nowrap'}
          >
            {name}
          </Box>
          <MyIcon
            name={'edit'}
            _hover={{ color: 'primary.600' }}
            w={'0.875rem'}
            cursor={'pointer'}
            onClick={onEdit}
          />
        </HStack>
        <Box mt={3} fontSize={'sm'} color={'myGray.500'} cursor={'pointer'} onClick={onEdit}>
          {intro || t('common:not_yet_introduced')}
        </Box>
      </Box>

      {managePer?.permission.hasManagePer && (
        <>
          <MyDivider my={6} />

          <Box>
            <FormLabel>{t('common:Operation')}</FormLabel>

            <Button
              variant={'transparentBase'}
              pl={1}
              leftIcon={<MyIcon name={'common/file/move'} w={'1rem'} />}
              transform={'none !important'}
              w={'100%'}
              justifyContent={'flex-start'}
              size={'sm'}
              fontSize={'mini'}
              mt={4}
              onClick={onMove}
            >
              {t('common:Move')}
            </Button>
            {managePer.permission.isOwner && (
              <PopoverConfirm
                Trigger={
                  <Button
                    variant={'transparentDanger'}
                    pl={1}
                    leftIcon={<MyIcon name={'delete'} w={'1rem'} />}
                    transform={'none !important'}
                    w={'100%'}
                    justifyContent={'flex-start'}
                    size={'sm'}
                    fontSize={'mini'}
                    mt={3}
                  >
                    {t('common:delete_folder')}
                  </Button>
                }
                type="delete"
                content={deleteTip}
                onConfirm={onDelete}
              />
            )}
          </Box>
        </>
      )}

    </Box>
  );
};

export default FolderSlideCard;
