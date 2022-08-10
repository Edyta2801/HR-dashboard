import { SxProps, Theme } from '@mui/material';

export const box: SxProps<Theme> = {
  display: 'flex',
  justifyContent: 'center',
  marginTop: 40,
};
export const card: SxProps<Theme> = {
  borderRadius: 3,
  minWidth: 500,
};
export const cardContent: SxProps<Theme> = {
  fontSize: 30,
  fontWeight: 500,
  marginBottom: 3,
};
export const boxFormControl: SxProps<Theme> = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
};
export const link1: SxProps<Theme> = {
  color: '#1565c0',
  textDecoration: 'none',
};
export const button: SxProps<Theme> = {
  backgroundColor: 'rgb(255, 85, 0)',
  color: 'rgb(250, 250, 250)',
  width: '150px',
  height: 50,
  marginTop: 2,
  textTransform: 'none',
  fontWeight: 600,
  fontSize: '16px',
  '&:hover': {
    backgroundColor: 'rgb(255, 168, 124)',
    color: 'rgb(0, 0, 0)',
  },
};
export const linkContainer: SxProps<Theme> = {
  display: 'flex',
  alignItems: 'center',
  paddingTop: 3,
};
export const text: SxProps<Theme> = {
  fontSize: 16,
  fontWeight: 200,
};
