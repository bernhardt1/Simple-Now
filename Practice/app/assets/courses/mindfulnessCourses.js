import { INSTRUCTION_EXERCISE_SCREEN } from '../../constants/constants';
import {
  BREATH_0,
  BREATH_1,
  BREATH_2,
  BREATH_3,
  BREATH_4,
  BREATH_5,
  BREATH_6,
  HEAR_0,
  HEAR_1,
  HEAR_2,
  HEAR_3,
  HEAR_4,
  SEE_0,
  SEE_1,
  SEE_2,
  SEE_3,
  SEE_4,
  SELF_AWARENESS_0,
  SELF_AWARENESS_1,
  SELF_AWARENESS_2,
  SELF_AWARENESS_3,
  SELF_AWARENESS_4,
  SENSATION_0,
  SENSATION_1,
  SENSATION_2,
  SENSATION_3,
  SENSATION_4,
  SENSATION_5,
  SENSATION_6,
  SENSE_0,
  SENSE_1,
  SENSE_2,
  SENSE_3,
  SENSE_4,
  THOUGHT_0,
  THOUGHT_1,
  THOUGHT_2,
  THOUGHT_3,
  THOUGHT_4,
  THOUGHT_5,
  QUESTION_0,
  QUESTION_1,
  QUOTE_0,
  QUOTE_1,
  QUOTE_2,
} from './awarenessExercises';

// Mindfulness introductory Course
const MINDFULNESS_INTRO_COURSE = {
  id: '000',
  title: 'Mindfulness Introduction',
  information:
    'Welcome to our introductory mindfulness course.\n\nThis 3 day introduction course will start you on the path to improving your mindfulness.\n\nLike all our programs, we recommend combining Mindfulness Introduction with regular meditation.\n\nIf you have any feedback please don’t hesitate to reach out. We are continually developing additional courses and adjusting our existing offerings based on feedback from people like you.\n\nPlease Enjoy!',
  classes: [
    {
      title: 'Day 0',
      exercises: [
        {
          title: 'First Step',
          subheading: '3 Day Introduction to Mindfulness Course',
          copy: '3 Day Introduction to Mindfulness Course',
          instructions:
            'This introduction course will improve your mindfulness practice for the next 3 days.\n\nGood luck in your practice.',
          hasNext: true,
          screenType: INSTRUCTION_EXERCISE_SCREEN,
          image: 'begin',
        },
        {
          ...BREATH_0,
          reminderTime: '7:00:00',
          image: 'sunrise',
        },
        {
          ...SENSATION_0,
          reminderTime: '13:00:00',
          image: 'day',
        },
        {
          ...HEAR_2,
          reminderTime: '20:00:00',
          image: 'night',
        },
      ],
    },
    {
      title: 'Day 1',
      exercises: [
        {
          ...SEE_0,
          reminderTime: '7:00:00',
          image: 'sunrise',
        },
        {
          ...HEAR_0,
          reminderTime: '13:00:00',
          image: 'day',
        },
        {
          ...SENSE_0,
          reminderTime: '20:00:00',
          image: 'night',
        },
      ],
    },
    {
      title: 'Day 2',
      exercises: [
        {
          ...SELF_AWARENESS_0,
          reminderTime: '7:00:00',
          image: 'sunrise',
        },
        {
          ...BREATH_1,
          reminderTime: '13:00:00',
          image: 'day',
        },
        {
          ...SENSATION_1,
          reminderTime: '20:00:00',
          image: 'night',
        },
      ],
    },
    {
      title: 'Day 3',
      exercises: [
        {
          ...THOUGHT_1,
          reminderTime: '7:00:00',
          image: 'sunrise',
        },
        {
          ...SEE_1,
          reminderTime: '13:00:00',
          image: 'day',
        },
        {
          ...HEAR_1,
          reminderTime: '20:00:00',
          image: 'night',
        },
      ],
    },
    {
      title: 'Day 4',
      exercises: [
        {
          ...SENSE_1,
          reminderTime: '7:00:00',
          image: 'sunrise',
        },
        {
          ...SELF_AWARENESS_1,
          reminderTime: '13:00:00',
          image: 'day',
        },
        {
          ...BREATH_2,
          reminderTime: '20:00:00',
          image: 'night',
        },
      ],
    },
    {
      title: 'Day 5',
      exercises: [
        {
          ...SENSATION_2,
          reminderTime: '7:00:00',
          image: 'sunrise',
        },
        {
          ...THOUGHT_2,
          reminderTime: '13:00:00',
          image: 'day',
        },
        {
          ...SEE_2,
          reminderTime: '20:00:00',
          image: 'night',
        },
      ],
    },
    {
      title: 'Day 6',
      exercises: [
        {
          ...HEAR_2,
          reminderTime: '7:00:00',
          image: 'sunrise',
        },
        {
          ...SENSE_2,
          reminderTime: '13:00:00',
          image: 'day',
        },
        {
          ...SELF_AWARENESS_2,
          reminderTime: '20:00:00',
          image: 'night',
        },
      ],
    },
  ],
};

const MINDFULNESS_BEGINNER_COURSE = {
  id: '001',
  title: 'Mindfulness Beginner',
  information:
    'The goal of the Mindfulness Beginner Course is to teach you how to practice mindfulness in your daily life.\n\nFor the next 30 days we will send you exercises to bring your attention back to the present.\n\nThis course recognizes that learning to be mindful takes daily practice. For best results, we recommend doing the exercises throughout your day instead of all at once. We will send you spaced out reminders to help you succeed in this.\n\nIf you have any feedback please don’t hesitate to reach out. We are continually developing additional courses and adjusting our existing offerings based on feedback from people like you.\n\nPlease enjoy!',
  classes: [
    {
      title: 'Day 0',
      exercises: [
        {
          title: 'First Step',
          subheading: 'Introduction to the Mindfulness Beginner course',
          copy: 'Introduction to the Mindfulness Beginner course',
          instructions:
            'This 30 day course will build your mindfulness using proven daily exercises.\n\nGood luck in your practice.',
          hasNext: true,
          screenType: INSTRUCTION_EXERCISE_SCREEN,
          image: 'begin',
        },
        {
          ...BREATH_0,
          reminderTime: '7:00:00',
          image: 'sunrise',
        },
        {
          ...SENSATION_0,
          reminderTime: '13:00:00',
          image: 'day',
        },
        {
          ...HEAR_2,
          reminderTime: '20:00:00',
          image: 'night',
        },
      ],
    },
    {
      title: 'Day 1',
      exercises: [
        {
          ...SEE_0,
          reminderTime: '7:00:00',
          image: 'sunrise',
        },
        {
          ...HEAR_0,
          reminderTime: '13:00:00',
          image: 'day',
        },
        {
          ...SENSE_0,
          reminderTime: '20:00:00',
          image: 'night',
        },
      ],
    },
    {
      title: 'Day 2',
      exercises: [
        {
          ...SELF_AWARENESS_0,
          reminderTime: '7:00:00',
          image: 'sunrise',
        },
        {
          ...BREATH_1,
          reminderTime: '13:00:00',
          image: 'day',
        },
        {
          ...SENSATION_1,
          reminderTime: '20:00:00',
          image: 'night',
        },
      ],
    },
    {
      title: 'Day 3',
      exercises: [
        {
          ...THOUGHT_1,
          reminderTime: '7:00:00',
          image: 'sunrise',
        },
        {
          ...SEE_1,
          reminderTime: '13:00:00',
          image: 'day',
        },
        {
          ...HEAR_1,
          reminderTime: '20:00:00',
          image: 'night',
        },
      ],
    },
    {
      title: 'Day 4',
      exercises: [
        {
          ...SENSE_1,
          reminderTime: '7:00:00',
          image: 'sunrise',
        },
        {
          ...SELF_AWARENESS_1,
          reminderTime: '13:00:00',
          image: 'day',
        },
        {
          ...BREATH_2,
          reminderTime: '20:00:00',
          image: 'night',
        },
      ],
    },
    {
      title: 'Day 5',
      exercises: [
        {
          ...SENSATION_2,
          reminderTime: '7:00:00',
          image: 'sunrise',
        },
        {
          ...THOUGHT_2,
          reminderTime: '13:00:00',
          image: 'day',
        },
        {
          ...SEE_2,
          reminderTime: '20:00:00',
          image: 'night',
        },
      ],
    },
    {
      title: 'Day 6',
      exercises: [
        {
          ...HEAR_2,
          reminderTime: '7:00:00',
          image: 'sunrise',
        },
        {
          ...SENSE_2,
          reminderTime: '13:00:00',
          image: 'day',
        },
        {
          ...SELF_AWARENESS_2,
          reminderTime: '20:00:00',
          image: 'night',
        },
      ],
    },
    {
      title: 'Day 7',
      exercises: [
        {
          ...BREATH_3,
          reminderTime: '7:00:00',
          image: 'sunrise',
        },
        {
          ...SENSATION_3,
          reminderTime: '13:00:00',
          image: 'day',
        },
        {
          ...THOUGHT_3,
          reminderTime: '20:00:00',
          image: 'night',
        },
      ],
    },
    {
      title: 'Day 8',
      exercises: [
        {
          ...SEE_3,
          reminderTime: '7:00:00',
          image: 'sunrise',
        },
        {
          ...HEAR_3,
          reminderTime: '13:00:00',
          image: 'day',
        },
        {
          ...SENSE_3,
          reminderTime: '20:00:00',
          image: 'night',
        },
      ],
    },
    {
      title: 'Day 9',
      exercises: [
        {
          ...SELF_AWARENESS_3,
          reminderTime: '7:00:00',
          image: 'sunrise',
        },
        {
          ...BREATH_4,
          reminderTime: '13:00:00',
          image: 'day',
        },
        {
          ...SENSATION_4,
          reminderTime: '20:00:00',
          image: 'night',
        },
      ],
    },
    {
      title: 'Day 10',
      exercises: [
        {
          ...THOUGHT_4,
          reminderTime: '7:00:00',
          image: 'sunrise',
        },
        {
          ...SEE_4,
          reminderTime: '13:00:00',
          image: 'day',
        },
        {
          ...HEAR_4,
          reminderTime: '20:00:00',
          image: 'night',
        },
      ],
    },
    {
      title: 'Day 11',
      exercises: [
        {
          ...SENSE_4,
          reminderTime: '7:00:00',
          image: 'sunrise',
        },
        {
          ...SELF_AWARENESS_4,
          reminderTime: '13:00:00',
          image: 'day',
        },
        {
          ...BREATH_5,
          reminderTime: '20:00:00',
          image: 'night',
        },
      ],
    },
    {
      title: 'Day 12',
      exercises: [
        {
          ...SENSATION_5,
          reminderTime: '7:00:00',
          image: 'sunrise',
        },
        {
          ...THOUGHT_5,
          reminderTime: '13:00:00',
          image: 'day',
        },
        {
          ...SEE_0,
          reminderTime: '20:00:00',
          image: 'night',
        },
      ],
    },
    {
      title: 'Day 13',
      exercises: [
        {
          ...HEAR_1,
          reminderTime: '7:00:00',
          image: 'sunrise',
        },
        {
          ...SENSE_2,
          reminderTime: '13:00:00',
          image: 'day',
        },
        {
          ...SELF_AWARENESS_3,
          reminderTime: '20:00:00',
          image: 'night',
        },
      ],
    },
    {
      title: 'Day 14',
      exercises: [
        {
          ...BREATH_6,
          reminderTime: '7:00:00',
          image: 'sunrise',
        },
        {
          ...SENSATION_4,
          reminderTime: '13:00:00',
          image: 'day',
        },
        {
          ...THOUGHT_0,
          reminderTime: '20:00:00',
          image: 'night',
        },
      ],
    },
    {
      title: 'Day 15',
      exercises: [
        {
          ...SEE_1,
          reminderTime: '7:00:00',
          image: 'sunrise',
        },
        {
          ...HEAR_2,
          reminderTime: '13:00:00',
          image: 'day',
        },
        {
          ...SENSE_3,
          reminderTime: '20:00:00',
          image: 'night',
        },
      ],
    },
    {
      title: 'Day 16',
      exercises: [
        {
          ...SELF_AWARENESS_4,
          reminderTime: '7:00:00',
          image: 'sunrise',
        },
        {
          ...BREATH_0,
          reminderTime: '13:00:00',
          image: 'day',
        },
        {
          ...SENSATION_5,
          reminderTime: '20:00:00',
          image: 'night',
        },
      ],
    },
    {
      title: 'Day 17',
      exercises: [
        {
          ...THOUGHT_1,
          reminderTime: '7:00:00',
          image: 'sunrise',
        },
        {
          ...SEE_2,
          reminderTime: '13:00:00',
          image: 'day',
        },
        {
          ...HEAR_3,
          reminderTime: '20:00:00',
          image: 'night',
        },
      ],
    },
    {
      title: 'Day 18',
      exercises: [
        {
          ...SENSE_4,
          reminderTime: '7:00:00',
          image: 'sunrise',
        },
        {
          ...SELF_AWARENESS_1,
          reminderTime: '13:00:00',
          image: 'day',
        },
        {
          ...BREATH_1,
          reminderTime: '20:00:00',
          image: 'night',
        },
      ],
    },
    {
      title: 'Day 19',
      exercises: [
        {
          ...SENSATION_6,
          reminderTime: '7:00:00',
          image: 'sunrise',
        },
        {
          ...THOUGHT_2,
          reminderTime: '13:00:00',
          image: 'day',
        },
        {
          ...SEE_3,
          reminderTime: '20:00:00',
          image: 'night',
        },
      ],
    },
    {
      title: 'Day 20',
      exercises: [
        {
          ...HEAR_4,
          reminderTime: '7:00:00',
          image: 'sunrise',
        },
        {
          ...SENSE_0,
          reminderTime: '13:00:00',
          image: 'day',
        },
        {
          ...SELF_AWARENESS_2,
          reminderTime: '20:00:00',
          image: 'night',
        },
      ],
    },
    {
      title: 'Day 21',
      exercises: [
        {
          ...BREATH_2,
          reminderTime: '7:00:00',
          image: 'sunrise',
        },
        {
          ...SENSATION_0,
          reminderTime: '13:00:00',
          image: 'day',
        },
        {
          ...THOUGHT_3,
          reminderTime: '20:00:00',
          image: 'night',
        },
      ],
    },
    {
      title: 'Day 22',
      exercises: [
        {
          ...SEE_4,
          reminderTime: '7:00:00',
          image: 'sunrise',
        },
        {
          ...HEAR_0,
          reminderTime: '13:00:00',
          image: 'day',
        },
        {
          ...SENSE_1,
          reminderTime: '20:00:00',
          image: 'night',
        },
      ],
    },
    {
      title: 'Day 23',
      exercises: [
        {
          ...SELF_AWARENESS_3,
          reminderTime: '7:00:00',
          image: 'sunrise',
        },
        {
          ...BREATH_3,
          reminderTime: '13:00:00',
          image: 'day',
        },
        {
          ...SENSATION_1,
          reminderTime: '20:00:00',
          image: 'night',
        },
      ],
    },
    {
      title: 'Day 24',
      exercises: [
        {
          ...THOUGHT_4,
          reminderTime: '7:00:00',
          image: 'sunrise',
        },
        {
          ...SEE_0,
          reminderTime: '13:00:00',
          image: 'day',
        },
        {
          ...HEAR_1,
          reminderTime: '20:00:00',
          image: 'night',
        },
      ],
    },
    {
      title: 'Day 25',
      exercises: [
        {
          ...SENSE_2,
          reminderTime: '7:00:00',
          image: 'sunrise',
        },
        {
          ...SELF_AWARENESS_4,
          reminderTime: '13:00:00',
          image: 'day',
        },
        {
          ...BREATH_4,
          reminderTime: '20:00:00',
          image: 'night',
        },
      ],
    },
    {
      title: 'Day 26',
      exercises: [
        {
          ...SENSATION_2,
          reminderTime: '7:00:00',
          image: 'sunrise',
        },
        {
          ...THOUGHT_5,
          reminderTime: '13:00:00',
          image: 'day',
        },
        {
          ...QUOTE_0,
          reminderTime: '20:00:00',
          image: 'night',
        },
      ],
    },
    {
      title: 'Day 27',
      exercises: [
        {
          ...HEAR_2,
          reminderTime: '7:00:00',
          image: 'sunrise',
        },
        {
          ...SENSE_3,
          reminderTime: '13:00:00',
          image: 'day',
        },
        {
          ...QUOTE_1,
          reminderTime: '20:00:00',
          image: 'night',
        },
      ],
    },
    {
      title: 'Day 28',
      exercises: [
        {
          ...BREATH_5,
          reminderTime: '7:00:00',
          image: 'sunrise',
        },
        {
          ...SENSATION_3,
          reminderTime: '13:00:00',
          image: 'day',
        },
        {
          ...QUESTION_1,
          reminderTime: '20:00:00',
          image: 'night',
        },
      ],
    },
    {
      title: 'Day 29',
      exercises: [
        {
          ...SEE_1,
          reminderTime: '7:00:00',
          image: 'sunrise',
        },
        {
          ...HEAR_3,
          reminderTime: '13:00:00',
          image: 'day',
        },
        {
          ...QUOTE_2,
          reminderTime: '20:00:00',
          image: 'night',
        },
      ],
    },
    {
      title: 'Day 30',
      exercises: [
        {
          title: 'Last Day',
          subheading:
            'Congratulations on completing the Awareness Beginner course!',
          copy: 'Congratulations on completing the Awareness Beginner course!',
          instructions:
            "We hope you have enjoyed the last 30 days of practicing mindfulness.\n\nIf you would like to provide feedback or just want to get in touch please email us at simplenowteam@gmail.com. We would love to hear from you!\n\nEnjoy the final day's exercises and good luck on your journey.",
          hasNext: true,
          screenType: INSTRUCTION_EXERCISE_SCREEN,
          image: 'begin',
        },
        {
          ...SELF_AWARENESS_0,
          reminderTime: '7:00:00',
          image: 'sunrise',
        },
        {
          ...BREATH_6,
          reminderTime: '13:00:00',
          image: 'day',
        },
        {
          ...QUESTION_0,
          reminderTime: '20:00:00',
          image: 'night',
        },
      ],
    },
  ],
};

export { MINDFULNESS_INTRO_COURSE, MINDFULNESS_BEGINNER_COURSE };
