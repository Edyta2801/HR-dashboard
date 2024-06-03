import { Box, Typography } from '@mui/material';
import * as styles from './SummaryItem.styles';
import { SummaryItemProps } from './SummaryItem.types';
import { mergeSx } from '../../../utils/mergeSx/mergeSx';

export function SummaryItem({
  icon,
  iconVariant,
  name,
  value,
}: SummaryItemProps) {
  return (
    <Box sx={styles.wrapper}>
      <Box
        sx={mergeSx(
          styles.iconContainer,
          styles.iconVariantToColor[iconVariant],
        )}
      >
        {icon}
      </Box>
      <Box sx={styles.contentWrapper}>
        <Typography sx={styles.name}>{name}</Typography>
        <Typography variant="h5">{value}</Typography>
      </Box>
    </Box>
  );
}
