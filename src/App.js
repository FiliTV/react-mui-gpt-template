import React, { useState } from 'react';
import {
    Button,
    Container,
    Box,
    Typography,
    List,
    ListItem,
    ListItemText, styled,
} from '@mui/material';

const StyledContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const StyledBox = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  max-width: 400px;
`;

function App() {
  const [tasks, setTasks] = useState(['Tarea 1', 'Tarea 2']);

  const handleButtonClick = () => {
    const newTask = `Tarea ${tasks.length + 1}`;
    setTasks([...tasks, newTask]);
  };

  return (
      <StyledContainer>
        <Typography variant="h4" gutterBottom>
          Lista de tareas
        </Typography>
        <StyledBox>
          <List>
            {tasks.map((task, index) => (
                <ListItem key={index}>
                  <ListItemText primary={task} />
                </ListItem>
            ))}
          </List>
          <Button variant="contained" color="primary" onClick={handleButtonClick}>
            Añadir tarea
          </Button>
        </StyledBox>
      </StyledContainer>
  );
}

export default App;
