import React from 'react';
import { Card, CardContent, Typography, Grid, Chip, LinearProgress, Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';

// A helper function to determine the progress bar color
function getProgressColor(progress) {
  if (progress >= 75) return 'success';
  if (progress >= 50) return 'warning';
  return 'error';
}

function TaskCard({ title, description, priority, dueDate, progress, assignee, status }) {
  const theme = useTheme();

  return (
    <Card sx={{ mb: 3, p: { xs: 1, sm: 2 }, boxShadow: 2 }}>
      <CardContent>
        {/* Title and Priority Chip */}
        <Grid container justifyContent="space-between" alignItems="center">
          <Typography variant="h6" component="div" sx={{ fontSize: { xs: '1rem', sm: '1.25rem' } }}>
            {title}
          </Typography>
          <Chip
            label={priority}
            color={priority === 'High' ? 'error' : priority === 'Medium' ? 'warning' : 'primary'}
            sx={{ fontWeight: 'bold', fontSize: { xs: '0.75rem', sm: '1rem' } }}
          />
        </Grid>

        {/* Description */}
        <Typography sx={{ mt: 1, fontSize: { xs: '0.75rem', sm: '0.875rem' } }} color="text.secondary">
          {description}
        </Typography>

        {/* Assignee and Due Date */}
        <Grid container justifyContent="space-between" alignItems="center" sx={{ mt: 1 }}>
          <Typography sx={{ fontSize: { xs: '0.75rem', sm: '0.875rem' } }} color="text.secondary">
            Assignee: {assignee || 'Unassigned'}
          </Typography>
          <Typography sx={{ fontSize: { xs: '0.75rem', sm: '0.875rem' } }} color="text.secondary">
            Due: {dueDate}
          </Typography>
        </Grid>

        {/* Status */}
        <Typography sx={{ mt: 1, fontStyle: 'italic', fontSize: { xs: '0.75rem', sm: '0.875rem' } }} color="text.secondary">
          Status: {status || 'Pending'}
        </Typography>

        {/* Progress Bar */}
        <Box sx={{ mt: 2 }}>
          <LinearProgress
            variant="determinate"
            value={progress}
            color={getProgressColor(progress)}
            sx={{
              height: 10,
              borderRadius: 5,
              width: { xs: '100%', sm: '100%' },
            }}
          />
          <Typography sx={{ mt: 1, fontSize: { xs: '0.75rem', sm: '0.875rem' } }} color="text.secondary">
            {progress}% Completed
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
}

export default TaskCard;
