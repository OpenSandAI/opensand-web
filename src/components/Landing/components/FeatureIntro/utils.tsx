import { Typography } from '@mui/material';

export const featureList = [
  {
    type: 'feature1',
    summary: (
      <Typography
        component="div"
        sx={{
          fontWeight: 600,
          fontSize: { xs: 60, md: 90 },
          color: '#FFF',
        }}
      >
        <Typography
          component="div"
          sx={{
            marginLeft: 0,
            fontSize: { xs: 60, md: 90 },
          }}
        >
          Genuine Open AGI
        </Typography>
        <Typography
          component="div"
          sx={{
            marginLeft: { xs: 0, md: 0 },
            fontSize: { xs: 60, md: 40 },
            color: 'rgba(0, 230, 137, 1)',
          }}
        >
          Protecting the Diversity of "Consciousness"
        </Typography>
        <Typography
          component="div"
          sx={{
            fontSize: { xs: 60, md: 40 },
          }}
        >
          Open Source, Open Collaboration, Co-creation, and Co-governance
        </Typography>
      </Typography>
    ),
    title: 'Ommiscient Data',
    content: `Computational Infrastructure Assurance,
    Academic computing power of 1500+H800 (approximately 1 billion HKD) supports AI services,
    Technological Empowerment of the Web3 Community,
    Weak to Strong Learning,
    Transformer-Based SHA256 Proof of Work,
    Responsible Scaling Consensus
    `,
    pictureUrl: '/images/site/landing/landing-tech-first.png',
  },
  {
    type: 'feature2',
    summary: (
      <Typography
        component="div"
        sx={{
          fontWeight: 600,
          fontSize: { xs: 60, md: 90 },
          color: '#FFF',
        }}
      >
        <Typography
          component="div"
          sx={{
            fontSize: { xs: 60, md: 90 },
          }}
        >
          <Typography component="span" sx={{ fontSize: { xs: 60, md: 90 }, color: 'rgba(0, 230, 137, 1)' }}>
            Applicable Scenarios
          </Typography>
        </Typography>
      </Typography>
    ),
    title: '',
    content: '',
    contents: [
      'AI Model Training Sub-protocol',
      'AI Inference Framework Services',
      'DApp Website Services',
      'Off-chain Data Storage Services',
      'Sand CDN Network',
    ],
    pictureUrl: '/images/site/landing/landing-tech-secondary.png',
  },
  {
    type: 'feature3',
    summary: (
      <Typography
        component="div"
        sx={{
          fontWeight: 600,
          fontSize: { xs: 60, md: 90 },
          color: '#FFF',
        }}
      >
        <Typography
          component="div"
          sx={{
            fontSize: { xs: 60, md: 90 },
            color: 'rgba(0, 230, 137, 1)',
          }}
        >
          Computing Power
        </Typography>
        <Typography
          component="div"
          sx={{
            fontSize: { xs: 60, md: 90 },
          }}
        >
          1500+ NVIDIA H800
        </Typography>
      </Typography>
    ),
    title: 'Great Power for AI',
    content: `Data, Multimodal Feature Model, Feature, Encoder Model, Connact(data, encode code), SHA256, Electronic Finger Print`,
    pictureUrl: '/images/site/landing/landing-tech-third.png',
  },
];

export const TEXT_ALIGN_MAP = {
  feature1: 'right',
  feature2: 'center',
  feature3: 'left',
};
