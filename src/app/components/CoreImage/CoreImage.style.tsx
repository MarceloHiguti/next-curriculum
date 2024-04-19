import Badge, { BadgeProps } from '@mui/material/Badge';
import { styled } from '@mui/material/styles';

export const avatarStyle = {
  border: '1px solid rgba(0, 0, 0, 0.26)',
  width: '40px',
  height: '40px',
  borderRadius: '50%',
};

interface CustomBadgeProps extends BadgeProps {
  statusColor: string;
}

export const StyledStatusBadge = styled(Badge, {
  shouldForwardProp: (prop) => prop !== 'statusColor',
})<CustomBadgeProps>(({ theme, statusColor }) => ({
  '& .MuiBadge-badge': {
    backgroundColor: statusColor,
    color: statusColor,
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    '&::after': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      border: '1px solid currentColor',
      content: '""',
    },
  },
}));
