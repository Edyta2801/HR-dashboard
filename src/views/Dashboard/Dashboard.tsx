import { Box, Typography } from '@mui/material';
import { PersonOutline } from '@mui/icons-material';

import { DashboardItem } from './dashboardItem/DashboardItem';
import * as styles from './Dashboard.styles';
import { SummaryItem } from './summaryItem/SummaryItem';

export function Dashboard() {
  return (
    <Box sx={styles.container}>
      <DashboardItem>
        <Typography variant="h5" component="p">
          Open positions
        </Typography>

        <Typography color="error">
          Something went wrong while loading open positions data, please try
          again
        </Typography>

        <Typography variant="h5" component="p">
          Jobs
        </Typography>
      </DashboardItem>

      <DashboardItem>
        <Typography variant="h5" component="p">
          Candidates
        </Typography>

        <Typography color="error">
          Something went wrong while loading candidates data, please try again
        </Typography>

        <Typography variant="h5" component="p">
          Candidates
        </Typography>
      </DashboardItem>

      <DashboardItem sx={styles.spanFull}>
        <Box sx={styles.generalTextWrapper}>
          <Typography variant="h5" component="p">
            General
          </Typography>
          <Typography>
            <Typography component="span" fontWeight={600}>
              Total 48.5% growth &#128526;
            </Typography>
            <Typography component="span" sx={styles.grayedText}>
              {' '}
              this month
            </Typography>
          </Typography>
        </Box>
        <Box sx={styles.summaryItemsContainer}>
          <SummaryItem
            iconVariant="blue"
            icon={<PersonOutline color="inherit" />}
            name="Employees"
            value="245k"
          />
          <SummaryItem
            iconVariant="green"
            icon={<PersonOutline color="inherit" />}
            name="Candidates"
            value="candidates"
          />
          <SummaryItem
            iconVariant="yellow"
            icon={<PersonOutline color="inherit" />}
            name="Employees"
            value="245k"
          />
        </Box>
      </DashboardItem>
    </Box>
  );
}
