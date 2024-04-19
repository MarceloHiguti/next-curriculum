import { Tooltip } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';

import FallbackLogo from '../../assets/logo-placeholder.svg';
import styles from './CoreImage.module.scss';
import { StyledStatusBadge } from './CoreImage.style';

export type CoreImageType = {
  avatar?: boolean;
  src: string;
  namespace?: string | string[];
  status?: string;
  customClass?: string;
};

export const CoreImage: FC<CoreImageType> = ({ avatar, src, customClass, status = '', namespace }) => {
  const { t } = useTranslation(namespace);
  const theme = useTheme();
  const [loaded, setLoaded] = useState(false);

  const statusColor: Map<string, string> = new Map([
    ['active', theme.palette.success.main],
    ['inactive', theme.palette.error.main],
    ['Unsubscribe', theme.palette.error.main],
    ['pending', theme.palette.info.main],
    ['default', theme.palette.info.main],
  ]);

  const onImageLoaded = () => setLoaded(true);

  // Need a correct list of values to map the status with the colors and translate it
  // const statusTooltipTitle = status ? t(`value.status.${status}`) : '';
  const statusTooltipTitle = status ? t(status) : '';
  const isStatusVisible = Boolean(statusColor.get(status));
  const loadingIconClass = [
    avatar ? `${styles.coreImage__avatar}` : '',
    loaded ? `${styles.coreImage__loaded}` : `${styles.coreImage__notLoaded}`,
    customClass,
  ].join(' ');

  const CoreImageClass = [
    avatar ? `${styles.coreImage__avatar}` : '',
    loaded ? `${styles.coreImage__notLoaded}` : `${styles.coreImage__loaded}`,
    customClass,
  ].join(' ');

  return (
    <Tooltip title={statusTooltipTitle}>
      <StyledStatusBadge
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        invisible={!isStatusVisible}
        overlap="circular"
        statusColor={statusColor.get(status) ?? theme.palette.info.main}
        variant="dot"
      >
        <img alt="LoadingIcon" className={`${loadingIconClass}`} src={FallbackLogo} />
        <img alt="CoreImage" className={`${CoreImageClass}`} onLoad={onImageLoaded} src={src} />
      </StyledStatusBadge>
    </Tooltip>
  );
};
