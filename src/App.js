import React, { useState } from 'react';
import { Container, AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import ShortenerForm from './components/ShortenerForm';
import ShortenedLinks from './components/ShortenedLinks';
import Statistics from './components/Statistics';
import './App.css';


const App = () => {
  const [links, setLinks] = useState([]);
  const [showStats, setShowStats] = useState(false);

  const handleCreate = (newLinks) => {
    setLinks([...links, ...newLinks]);
  };

  return (
    <Container>
      <AppBar position="sticky">
        <Toolbar>
          <Typography variant="h6">React URL Shortener</Typography>
          <Box sx={{ flexGrow: 1 }} />
          <Button color="inherit" onClick={() => setShowStats(!showStats)}>
            {showStats ? 'Shorten URLs' : 'View Statistics'}
          </Button>
        </Toolbar>
      </AppBar>
      <Box mt={3}>
        {showStats ? <Statistics /> : <ShortenerForm onCreate={handleCreate} />}
        {!showStats && <ShortenedLinks links={links} />}
      </Box>
    </Container>
  );
};

export default App;
