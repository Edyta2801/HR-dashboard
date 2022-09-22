import { Styles } from 'theme/theme';

export const box: Styles = {
  display: 'flex',
  justifyContent: 'center',
};
export const card: Styles = {
  borderRadius: 3,
  minWidth: 500,
};
export const cardContent: Styles = {
  fontSize: 30,
  fontWeight: 500,
  marginBottom: 3,
};
export const boxFormControl: Styles = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
};
export const link1: Styles = {
  color: '#1565c0',
  textDecoration: 'none',
};
export const button: Styles = {
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
export const linkContainer: Styles = {
  display: 'flex',
  alignItems: 'center',
  paddingTop: 3,
};
export const text: Styles = {
  fontSize: 16,
  fontWeight: 200,
};
