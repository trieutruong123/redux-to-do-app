import { Provider } from 'react-redux';
import { Box, Container, Grid, Typography } from '@mui/material';
import store from 'store';
import { ToDoForm, ToDoList } from 'components';

function App() {
  return (
    <>
      <Provider store={store}>
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            py: 8,
          }}
        >
          <Container
            maxWidth="lg"
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Typography variant="h4">Redux Todo App</Typography>
            <Grid
              container
              spacing={3}
              sx={{
                pt: 3,
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Grid item lg={7} md={7} sm={6} xs={12}>
                <ToDoForm></ToDoForm>
              </Grid>
              <Grid item lg={7} md={7} sm={6} xs={12}>
                <ToDoList></ToDoList>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Provider>
    </>
  );
}

export default App;
