import CheckIcon from '@mui/icons-material/Check';
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
import { LoadingButton, LoadingButtonProps } from '@mui/lab';
import { Button as MUIButton } from '@mui/material';
import deepEqual from 'fast-deep-equal/react';
import { forwardRef, ForwardRefExoticComponent, memo, PropsWithoutRef, useMemo } from 'react';

import { CoreTypography } from '../CoreTypography/CoreTypography';
import { CoreTypographyVariant } from '../CoreTypography/CoreTypography.model';
import styles from './CoreButton.module.scss';

export type CoreButtonClassnames = {
  font: string;
};
export type CoreButtonVariant = 'text' | 'outlined' | 'contained' | 'save' | 'edit';

export type CoreButtonProps = Omit<LoadingButtonProps, 'variant'> & {
  variant?: CoreButtonVariant;
  customClassnames?: Partial<CoreButtonClassnames>;
  coreTypographyVariant?: CoreTypographyVariant;
};

export const CoreButton: ForwardRefExoticComponent<PropsWithoutRef<CoreButtonProps>> = memo(
  forwardRef<HTMLButtonElement, CoreButtonProps>(function CoreButton(
    {
      children,
      sx,
      variant,
      coreTypographyVariant = CoreTypographyVariant.BODY_01_MEDIUM,
      loading = false,
      customClassnames,
      startIcon,
      ...props
    },
    ref
  ) {
    const Button = typeof loading === 'undefined' ? MUIButton : LoadingButton;

    const variantProps = useMemo<Partial<LoadingButtonProps>>(() => {
      switch (variant) {
        case 'save':
          return {
            variant: 'contained',
            startIcon: <CheckIcon />,
            children,
          };
        case 'edit':
          return {
            variant: undefined,
            children: <CreateOutlinedIcon />,
          };
        default:
          return {
            variant,
            children,
            startIcon,
          };
      }
    }, [variant, children, startIcon]);

    const childrenIsSTring = typeof variantProps?.children === 'string';

    const renderChildren = () => {
      if (childrenIsSTring) {
        return (
          <CoreTypography
            component="span"
            customClassName={customClassnames?.font ?? ''}
            variant={CoreTypographyVariant.BODY_01_MEDIUM}
          >
            {variantProps?.children}
          </CoreTypography>
        );
      }
      return variantProps?.children;
    };

    const { className: propsClassName, ...rest } = props;

    return (
      <Button
        ref={ref}
        className={`${styles.coreButton} ${propsClassName} ${
          childrenIsSTring ? styles.coreButton__childrenIsString : ''
        }`}
        loading={loading}
        sx={{
          ...sx,
        }}
        {...variantProps}
        {...rest}
      >
        {renderChildren()}
      </Button>
    );
  }),
  deepEqual
);
