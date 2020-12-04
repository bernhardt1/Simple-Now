// The problem with the fade animation is how long it takes for the ImageBackground on screens
//to load. We end up with a white flash because of the following:

// 1. screen A starts fading out
// 2. screen B has it's content rendered, but the background is still white (no image loaded yet)
// 3. screen A fades more, the whiteness on B becomes more apparent
// 4. the background on screen B loads and pops in, causing a perceived flash effect

// SOLUTIONS
// BEST: pre-load the images app-wide - allowing instant render. This doesn't seem to work though.
// COMPROMISE: reduce the quality of background images - this lets them load fast enough.
// HACKY: hold the animation at 0 for a moment after clicking to give more time for the load. This
// done by locking outputRange at 0, until input range > some value.
const forFade = ({ current, next }) => {
  // the popped screen locks it's next.progress at 1, so use current.progress for the calculation
  // the incoming screen animated current.progres 0 -> 1. Use it for the transition calculation
  const opacity =
    current.progress === 1
      ? next.progress.interpolate({
          inputRange: [0, 0.1, 1],
          outputRange: [0, 0, 1],
          extrapolate: 'clamp',
        })
      : current.progress.interpolate({
          inputRange: [0, 1],
          outputRange: [0, 1],
        });

  return {
    cardStyle: {
      opacity,
    },
  };
};

const forFadeDefault = ({ current }) => ({
  cardStyle: {
    opacity: current.progress,
  },
});

export { forFade, forFadeDefault };
