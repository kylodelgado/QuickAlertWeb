import React from 'react';
import { 
  AppBar, 
  Toolbar, 
  Typography, 
  Button, 
  Container, 
  Box, 
  Grid, 
  Card, 
  CardContent,
  ThemeProvider,
  createTheme,
  CssBaseline,
  Paper,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  Chip,
  Stack
} from '@mui/material';
import SecurityIcon from '@mui/icons-material/Security';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import PhoneIcon from '@mui/icons-material/Phone';
import TimelineIcon from '@mui/icons-material/Timeline';
import BuildIcon from '@mui/icons-material/Build';
import SupportIcon from '@mui/icons-material/Support';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import NotificationsIcon from '@mui/icons-material/Notifications';
import DescriptionIcon from '@mui/icons-material/Description';
import SchoolIcon from '@mui/icons-material/School';
import VerifiedIcon from '@mui/icons-material/Verified';
import HotelIcon from '@mui/icons-material/Hotel';
import BusinessIcon from '@mui/icons-material/Business';
import HomeIcon from '@mui/icons-material/Home';
import ApartmentIcon from '@mui/icons-material/Apartment';
import AssessmentIcon from '@mui/icons-material/Assessment';
import BuildCircleIcon from '@mui/icons-material/BuildCircle';

const theme = createTheme({
  palette: {
    primary: {
      main: '#2563eb',
      light: '#60a5fa',
      dark: '#1d4ed8',
    },
    secondary: {
      main: '#7c3aed',
      light: '#a78bfa',
      dark: '#5b21b6',
    },
    background: {
      default: '#f8fafc',
      paper: '#ffffff',
    },
    text: {
      primary: '#1e293b',
      secondary: '#64748b',
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 800,
      letterSpacing: '-0.02em',
    },
    h2: {
      fontWeight: 700,
      letterSpacing: '-0.01em',
    },
    h4: {
      fontWeight: 700,
    },
    h6: {
      fontWeight: 600,
    },
    button: {
      textTransform: 'none',
      fontWeight: 600,
    },
  },
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          padding: '8px 24px',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 16,
        },
      },
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ flexGrow: 1 }}>
        {/* Navigation */}
        <AppBar position="static" elevation={0} sx={{ bgcolor: 'background.paper', borderBottom: '1px solid', borderColor: 'grey.200' }}>
          <Container maxWidth="lg">
            <Toolbar>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontWeight: 700, color: 'primary.main' }}>
                SafetyFirst
              </Typography>
              <Button color="inherit" sx={{ color: 'text.primary', '&:hover': { color: 'primary.main' } }}>Home</Button>
              <Button color="inherit" sx={{ color: 'text.primary', '&:hover': { color: 'primary.main' } }}>Services</Button>
              <Button color="inherit" sx={{ color: 'text.primary', '&:hover': { color: 'primary.main' } }}>About</Button>
              <Button color="inherit" sx={{ color: 'text.primary', '&:hover': { color: 'primary.main' } }}>Contact</Button>
            </Toolbar>
          </Container>
        </AppBar>

        {/* Hero Section */}
        <Box sx={{ 
          background: 'linear-gradient(rgba(37, 99, 235, 0.95), rgba(124, 58, 237, 0.95)), url("https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color: 'white', 
          py: 16,
          textAlign: 'center'
        }}>
          <Container maxWidth="lg">
            <Typography variant="h1" component="h1" gutterBottom sx={{ fontSize: { xs: '2.5rem', md: '3.5rem' } }}>
              Compliance Made Simple
            </Typography>
            <Typography variant="h5" gutterBottom sx={{ mb: 4, fontWeight: 400, opacity: 0.9 }}>
              Comprehensive Panic Button Solutions for New York Hotels
            </Typography>
            <Typography variant="h6" gutterBottom sx={{ mb: 6, fontWeight: 400, opacity: 0.9 }}>
              Keep your staff protected and your hotel compliant with NY's Housekeeper Protection Act
            </Typography>
            <Button 
              variant="contained" 
              color="secondary" 
              size="large"
              sx={{ 
                mr: 2,
                px: 4,
                py: 1.5,
                fontSize: '1.1rem',
                boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
                '&:hover': {
                  boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
                }
              }}
            >
              Get a Free Compliance Assessment
            </Button>
            <Chip 
              icon={<VerifiedIcon />} 
              label="Serving 50+ New York Hotels" 
              sx={{ 
                backgroundColor: 'rgba(255, 255, 255, 0.15)',
                color: 'white',
                backdropFilter: 'blur(4px)',
                '& .MuiChip-icon': { color: 'white' },
                height: 40,
                fontSize: '1rem',
                px: 2,
              }}
            />
          </Container>
        </Box>

        {/* Problem Statement Section */}
        <Container maxWidth="lg" sx={{ py: 12 }}>
          <Typography variant="h4" align="center" gutterBottom sx={{ mb: 6, color: 'text.primary' }}>
            New York Hotels Face Strict Safety Regulations
          </Typography>
          <Grid container spacing={4} sx={{ mt: 2 }}>
            <Grid item xs={12} md={6}>
              <Paper elevation={0} sx={{ p: 4, height: '100%', bgcolor: 'background.paper', border: '1px solid', borderColor: 'grey.200' }}>
                <Typography variant="h6" gutterBottom sx={{ color: 'primary.main' }}>
                  Key Requirements
                </Typography>
                <List>
                  <ListItem>
                    <ListItemIcon>
                      <TimelineIcon sx={{ color: 'primary.main' }} />
                    </ListItemIcon>
                    <ListItemText 
                      primary="Implementation Deadlines"
                      secondary="Compliance required for hotels with 25+ rooms"
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <SecurityIcon sx={{ color: 'primary.main' }} />
                    </ListItemIcon>
                    <ListItemText 
                      primary="Safety Requirements"
                      secondary="One-touch activation and immediate response system"
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <DescriptionIcon sx={{ color: 'primary.main' }} />
                    </ListItemIcon>
                    <ListItemText 
                      primary="Documentation"
                      secondary="Regular testing and maintenance records required"
                    />
                  </ListItem>
                </List>
              </Paper>
            </Grid>
            <Grid item xs={12} md={6}>
              <Paper elevation={0} sx={{ p: 4, height: '100%', bgcolor: 'background.paper', border: '1px solid', borderColor: 'grey.200' }}>
                <Typography variant="h6" gutterBottom sx={{ color: 'primary.main' }}>
                  Statistics & Impact
                </Typography>
                <List>
                  <ListItem>
                    <ListItemIcon>
                      <NotificationsIcon sx={{ color: 'primary.main' }} />
                    </ListItemIcon>
                    <ListItemText 
                      primary="Safety Incidents"
                      secondary="Reduction in workplace incidents after implementation"
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <CheckCircleIcon sx={{ color: 'primary.main' }} />
                    </ListItemIcon>
                    <ListItemText 
                      primary="Compliance Rate"
                      secondary="98% of NYC hotels now compliant"
                    />
                  </ListItem>
                </List>
              </Paper>
            </Grid>
          </Grid>
        </Container>

        {/* Solution Overview */}
        <Box sx={{ bgcolor: 'background.default', py: 12 }}>
          <Container maxWidth="lg">
            <Typography variant="h4" align="center" gutterBottom sx={{ mb: 6, color: 'text.primary' }}>
              Complete Panic Button Compliance Solutions
            </Typography>
            <Grid container spacing={4} sx={{ mt: 2 }}>
              <Grid item xs={12} md={4}>
                <Card elevation={0} sx={{ height: '100%', border: '1px solid', borderColor: 'grey.200', transition: 'transform 0.2s, box-shadow 0.2s', '&:hover': { transform: 'translateY(-4px)', boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)' } }}>
                  <CardContent sx={{ p: 4 }}>
                    <BuildIcon sx={{ fontSize: 48, mb: 2, color: 'primary.main' }} />
                    <Typography variant="h6" gutterBottom sx={{ color: 'text.primary' }}>
                      Hardware
                    </Typography>
                    <List>
                      <ListItem>
                        <ListItemText 
                          primary="State-of-the-art Devices"
                          secondary="Long battery life, extended range, reliable connectivity"
                        />
                      </ListItem>
                      <ListItem>
                        <ListItemText 
                          primary="Durable Design"
                          secondary="Built for hotel environment durability"
                        />
                      </ListItem>
                    </List>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} md={4}>
                <Card elevation={0} sx={{ height: '100%', border: '1px solid', borderColor: 'grey.200', transition: 'transform 0.2s, box-shadow 0.2s', '&:hover': { transform: 'translateY(-4px)', boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)' } }}>
                  <CardContent sx={{ p: 4 }}>
                    <BuildCircleIcon sx={{ fontSize: 48, mb: 2, color: 'primary.main' }} />
                    <Typography variant="h6" gutterBottom sx={{ color: 'text.primary' }}>
                      Installation
                    </Typography>
                    <List>
                      <ListItem>
                        <ListItemText 
                          primary="Professional Setup"
                          secondary="Minimal disruption to hotel operations"
                        />
                      </ListItem>
                      <ListItem>
                        <ListItemText 
                          primary="Full Coverage"
                          secondary="Hotel-wide coverage guarantee"
                        />
                      </ListItem>
                    </List>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} md={4}>
                <Card elevation={0} sx={{ height: '100%', border: '1px solid', borderColor: 'grey.200', transition: 'transform 0.2s, box-shadow 0.2s', '&:hover': { transform: 'translateY(-4px)', boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)' } }}>
                  <CardContent sx={{ p: 4 }}>
                    <SupportIcon sx={{ fontSize: 48, mb: 2, color: 'primary.main' }} />
                    <Typography variant="h6" gutterBottom sx={{ color: 'text.primary' }}>
                      Support & Maintenance
                    </Typography>
                    <List>
                      <ListItem>
                        <ListItemText 
                          primary="24/7 Support"
                          secondary="Round-the-clock technical assistance"
                        />
                      </ListItem>
                      <ListItem>
                        <ListItemText 
                          primary="Regular Maintenance"
                          secondary="Scheduled testing and battery replacement"
                        />
                      </ListItem>
                    </List>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Container>
        </Box>

        {/* Hotel Types Section */}
        <Container maxWidth="lg" sx={{ py: 12 }}>
          <Typography variant="h4" align="center" gutterBottom sx={{ mb: 6, color: 'text.primary' }}>
            Solutions for Every New York Hotel
          </Typography>
          <Grid container spacing={4} sx={{ mt: 2 }}>
            <Grid item xs={6} md={3}>
              <Card elevation={0} sx={{ textAlign: 'center', p: 3, border: '1px solid', borderColor: 'grey.200', transition: 'transform 0.2s, box-shadow 0.2s', '&:hover': { transform: 'translateY(-4px)', boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)' } }}>
                <HotelIcon sx={{ fontSize: 48, mb: 2, color: 'primary.main' }} />
                <Typography variant="h6" sx={{ color: 'text.primary' }}>Luxury Hotels</Typography>
              </Card>
            </Grid>
            <Grid item xs={6} md={3}>
              <Card elevation={0} sx={{ textAlign: 'center', p: 3, border: '1px solid', borderColor: 'grey.200', transition: 'transform 0.2s, box-shadow 0.2s', '&:hover': { transform: 'translateY(-4px)', boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)' } }}>
                <BusinessIcon sx={{ fontSize: 48, mb: 2, color: 'primary.main' }} />
                <Typography variant="h6" sx={{ color: 'text.primary' }}>Business Hotels</Typography>
              </Card>
            </Grid>
            <Grid item xs={6} md={3}>
              <Card elevation={0} sx={{ textAlign: 'center', p: 3, border: '1px solid', borderColor: 'grey.200', transition: 'transform 0.2s, box-shadow 0.2s', '&:hover': { transform: 'translateY(-4px)', boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)' } }}>
                <HomeIcon sx={{ fontSize: 48, mb: 2, color: 'primary.main' }} />
                <Typography variant="h6" sx={{ color: 'text.primary' }}>Boutique Hotels</Typography>
              </Card>
            </Grid>
            <Grid item xs={6} md={3}>
              <Card elevation={0} sx={{ textAlign: 'center', p: 3, border: '1px solid', borderColor: 'grey.200', transition: 'transform 0.2s, box-shadow 0.2s', '&:hover': { transform: 'translateY(-4px)', boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)' } }}>
                <ApartmentIcon sx={{ fontSize: 48, mb: 2, color: 'primary.main' }} />
                <Typography variant="h6" sx={{ color: 'text.primary' }}>Extended Stay</Typography>
              </Card>
            </Grid>
          </Grid>
        </Container>

        {/* Contact Section */}
        <Box sx={{ 
          bgcolor: 'primary.main', 
          color: 'white', 
          py: 12,
          position: 'relative',
          overflow: 'hidden',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'linear-gradient(135deg, rgba(37, 99, 235, 0.95), rgba(124, 58, 237, 0.95))',
            zIndex: 1,
          }
        }}>
          <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
            <Typography variant="h4" align="center" gutterBottom sx={{ mb: 6 }}>
              Get Compliant Today
            </Typography>
            <Grid container spacing={4} sx={{ mt: 4 }}>
              <Grid item xs={12} md={6}>
                <Paper elevation={0} sx={{ p: 4, bgcolor: 'rgba(255, 255, 255, 0.1)', backdropFilter: 'blur(8px)', border: '1px solid', borderColor: 'rgba(255, 255, 255, 0.2)' }}>
                  <Typography variant="h6" gutterBottom>
                    Contact Information
                  </Typography>
                  <List>
                    <ListItem>
                      <ListItemIcon>
                        <PhoneIcon sx={{ color: 'white' }} />
                      </ListItemIcon>
                      <ListItemText 
                        primary="Compliance Hotline"
                        secondary="(555) 123-4567"
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemIcon>
                        <LocationOnIcon sx={{ color: 'white' }} />
                      </ListItemIcon>
                      <ListItemText 
                        primary="Office Location"
                        secondary="123 Business Ave, New York, NY 10001"
                      />
                    </ListItem>
                  </List>
                </Paper>
              </Grid>
              <Grid item xs={12} md={6}>
                <Paper elevation={0} sx={{ p: 4, bgcolor: 'rgba(255, 255, 255, 0.1)', backdropFilter: 'blur(8px)', border: '1px solid', borderColor: 'rgba(255, 255, 255, 0.2)' }}>
                  <Typography variant="h6" gutterBottom>
                    Request Information
                  </Typography>
                  <Button 
                    variant="contained" 
                    color="secondary" 
                    size="large"
                    fullWidth
                    sx={{ 
                      mt: 2,
                      py: 1.5,
                      fontSize: '1.1rem',
                      boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
                      '&:hover': {
                        boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
                      }
                    }}
                  >
                    Schedule Your Assessment
                  </Button>
                </Paper>
              </Grid>
            </Grid>
          </Container>
        </Box>

        {/* Footer */}
        <Box sx={{ bgcolor: 'grey.900', color: 'white', py: 8 }}>
          <Container maxWidth="lg">
            <Grid container spacing={4}>
              <Grid item xs={12} md={4}>
                <Typography variant="h6" gutterBottom sx={{ color: 'primary.light' }}>
                  SafetyFirst
                </Typography>
                <Typography variant="body2" sx={{ color: 'grey.400' }}>
                  Serving hotels throughout New York City, Long Island, Westchester, and beyond
                </Typography>
              </Grid>
              <Grid item xs={12} md={4}>
                <Typography variant="h6" gutterBottom sx={{ color: 'primary.light' }}>
                  Quick Links
                </Typography>
                <Stack spacing={1}>
                  <Button color="inherit" size="small" sx={{ color: 'grey.400', '&:hover': { color: 'white' } }}>Home</Button>
                  <Button color="inherit" size="small" sx={{ color: 'grey.400', '&:hover': { color: 'white' } }}>Services</Button>
                  <Button color="inherit" size="small" sx={{ color: 'grey.400', '&:hover': { color: 'white' } }}>About</Button>
                  <Button color="inherit" size="small" sx={{ color: 'grey.400', '&:hover': { color: 'white' } }}>Contact</Button>
                </Stack>
              </Grid>
              <Grid item xs={12} md={4}>
                <Typography variant="h6" gutterBottom sx={{ color: 'primary.light' }}>
                  Legal
                </Typography>
                <Stack spacing={1}>
                  <Button color="inherit" size="small" sx={{ color: 'grey.400', '&:hover': { color: 'white' } }}>Privacy Policy</Button>
                  <Button color="inherit" size="small" sx={{ color: 'grey.400', '&:hover': { color: 'white' } }}>Terms of Service</Button>
                </Stack>
              </Grid>
            </Grid>
            <Divider sx={{ my: 4, bgcolor: 'grey.800' }} />
            <Typography variant="body2" align="center" sx={{ color: 'grey.400' }}>
              © 2024 SafetyFirst. All rights reserved.
            </Typography>
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;
