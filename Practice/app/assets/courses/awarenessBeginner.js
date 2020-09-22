import {INSTRUCTION_EXERCISE_SCREEN} from '../../constants/constants';
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

// Awareness Beginner Course
const AWARENESS_BEGINNER_COURSE = {
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
            "We hope you have enjoyed the last 30 days of practicing mindfulness.\n\nIf you would like to provide feedback or just want to get in touch please email us at practicedailymindfulness@gmail.com. We would love to hear from you!\n\nEnjoy the final day's exercises and good luck on your journey.",
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

export default AWARENESS_BEGINNER_COURSE;
