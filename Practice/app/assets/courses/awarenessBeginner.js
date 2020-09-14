import {
  INSTRUCTION_EXERCISE_SCREEN,
  BREATH_EXERCISE,
  SENSATION_EXERCISE,
  THOUGHT_EXERCISE,
} from '../../constants/constants';

// Awareness Beginner CLASS
const awarenessBeginner = {
  id: '001',
  title: 'Awareness Beginner',
  information:
    'The goal of the Awareness Beginner course is to help you build the mindfulness practice of awareness into your daily life.\n\nThis 30 day program will help you recognize how little control you have over your attention and give you opportunities throughout the day to come back to yourself.\n\nLike all our programs, we recommend combining Awareness Beginner with regular meditation. There are many great apps and books out there to help you learn mindfulness meditation.\n\nOur favorite app for learning mindfulness meditation is Waking Up by Sam Harris.\n\nOur favorite books on the subject are The Power Of Now by Eckhart Tolle and Awareness by Anthony DeMello.\n\nA small warning... Mindfulness isn’t something you can cram. Your results will suffer if you do the practices in one batch. You don’t want to be mindful once each day for 5 minutes afterall!\n\nIf you have any feedback please don’t hesitate to reach out. We are continually developing additional courses and adjusting the existing ones based on feedback from people like you.\n\nEnjoy!',
  classes: [
    {
      title: 'Day 0',
      exercises: [
        {
          title: 'First Step',
          subheading: 'Introduction to the Awareness Beginner course',
          copy: 'Introduction to the Awareness Beginner course',
          instructions:
            'This course will help you build the mindfulness practice of awareness into your daily life.\n\nWe will send you a few simple mindfulness exercises every day. We encourage you to complete the exercises when they arrive.\n\nPracticing in this way will break you out of low-awareness states and build patterns that allow you to be more mindful all the time.\n\nTap next to begin your first exercise.',
          hasNext: true,
          screenType: INSTRUCTION_EXERCISE_SCREEN,
          image: 'begin',
        },
        {
          title: 'Breath',
          copy: 'Notice the natural rhythm of your breath.',
          recommendedTime: '30000',
          reminderTime: '7:00:00',
          exerciseType: BREATH_EXERCISE,
          image: 'sunrise',
        },
        {
          title: 'Sensation',
          copy: 'Pay attention to the feeling in your lips.',
          recommendedTime: '30000',
          reminderTime: '13:00:00',
          image: 'day',
          exerciseType: SENSATION_EXERCISE,
        },
        {
          title: 'Thought',
          copy:
            'Can you recognize the next thought you have? Just witness it without judgement.',
          recommendedTime: '30000',
          reminderTime: '20:00:00',
          image: 'night',
          exerciseType: THOUGHT_EXERCISE,
        },
      ],
    },
    {
      title: 'Day 1',
      exercises: [
        {
          title: 'Breath',
          copy: 'Notice the natural rhythm of your breath.',
          recommendedTime: '30000',
          reminderTime: '7:00:00',
          image: 'sunrise',
          exerciseType: BREATH_EXERCISE,
        },
        {
          title: 'Sensation',
          copy: 'Pay attention to the feeling in your lips.',
          recommendedTime: '30000',
          reminderTime: '13:00:00',
          image: 'day',
          exerciseType: SENSATION_EXERCISE,
        },
        {
          title: 'Thought',
          copy:
            'Can you recognize the next thought you have? Just witness it without judgement.',
          recommendedTime: '30000',
          reminderTime: '20:00:00',
          image: 'night',
          exerciseType: THOUGHT_EXERCISE,
        },
      ],
    },
  ],
};

export default awarenessBeginner;
