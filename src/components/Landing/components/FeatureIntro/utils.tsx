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
            marginLeft: '6rem',
            fontSize: { xs: 60, md: 90 },
          }}
        >
          THW BELT
        </Typography>
        <Typography
          component="div"
          sx={{
            marginLeft: { xs: 0, md: '3rem' },
            fontSize: { xs: 60, md: 90 },
            color: 'rgba(0, 230, 137, 1)',
          }}
        >
          AI ECOSYSTEM
        </Typography>
        <Typography
          component="div"
          sx={{
            fontSize: { xs: 60, md: 90 },
          }}
        >
          OF GENERARE CONTENT
        </Typography>
      </Typography>
    ),
    title: 'Ommiscient Data',
    content: `In this phase of the product, our goal is ambitious - we plan to gather all knowledge that exists in various fields, multiple industries, and held by individuals with diverse expertise. By bringing together these vast and intricate pieces of knowledge into one comprehensive and unified system, we're setting the stage for the emergence of
    AGI. This consolidation is crucial for preparing us to fully harness the potential of AGI.`,
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
            marginLeft: { xs: 0, md: '12rem' },
            fontSize: { xs: 60, md: 90 },
          }}
        >
          THW BELT
        </Typography>
        <Typography
          component="div"
          sx={{
            marginLeft: { xs: 0, md: '8rem' },
            fontSize: { xs: 60, md: 90 },
          }}
        >
          AI ECOSYSTEM
        </Typography>
        <Typography
          component="div"
          sx={{
            fontSize: { xs: 60, md: 90 },
          }}
        >
          OF{' '}
          <Typography component="span" sx={{ fontSize: { xs: 60, md: 90 }, color: 'rgba(0, 230, 137, 1)' }}>
            GENERARE CONTENT
          </Typography>
        </Typography>
      </Typography>
    ),
    title: 'Conscious Genesis',
    content: `In this phase of our product, we are focused on ensuring thorough training and control of AGI. Our approach includes offering a robust suite of tools and algorithms specifically tailored for critical fields like machine learning, deep learning, reinforcement learning, natural language processing and fine-tuning. This will enable professional researchers within the community to conduct extensive experiments and research within a unified framework, fostering cross-disciplinary integration and collaboration.`,
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
          THW BELT
        </Typography>
        <Typography
          component="div"
          sx={{
            fontSize: { xs: 60, md: 90 },
          }}
        >
          AI ECOSYSTEM
        </Typography>
        <Typography
          component="div"
          sx={{
            fontSize: { xs: 60, md: 90 },
          }}
        >
          OF GENERARE CONTENT
        </Typography>
      </Typography>
    ),
    title: 'Singularity Ne',
    content: `In the era of Internet 2.0, we're used to interacting through text and images, but this isn't enough for the age of AGI. The real revolution begins with reshaping the internet and the way we share information, using on-chain large language models (LLMs). Picture a world where your daily interactions, whether making friends, following people, or seeking business partners, are all facilitated by a dependable AGI assistant. This marks the dawn of a new ecosystem, where human connect, interact and syergize through the use of AGI.`,
    pictureUrl: '/images/site/landing/landing-tech-third.png',
  },
];

export const TEXT_ALIGN_MAP = {
  feature1: 'right',
  feature2: 'center',
  feature3: 'left',
};
