### Redux Player
 [![dependencies Status](https://david-dm.org/xiaofan2406/redux-player/status.svg)](https://david-dm.org/xiaofan2406/redux-player) [![devDependencies Status](https://david-dm.org/xiaofan2406/redux-player/dev-status.svg)](https://david-dm.org/xiaofan2406/redux-player?type=dev)


### Usage

```
npm i -S redux-player
```

```js
import { reducer as reduxPlayerReducer } from 'redux-player';


export default combineReducers({
  reduxPlayer: reduxPlayerReducer
});

```


### Actions
```js
import { actions } from 'redux-player';
or
import { setFrames } from 'redux-player/actions';

```

- `setFrames(frames)`:
  Initialize the play with an array of frames

  ```
  frames: [
    {
      action: Function, Async function,
      ...
    }
  ]
  ```

- `toggleShuffle()`:
  Toggle shuffle

- `toggleLoop()`:
  Toggle loop

- `next()`:
  Go to next frame

- `previous()`:
  Go to previous frame

- `play()`:
  Start playing all frames

- `stop()`:
  Reset play status
  

### Selectors
- `getFrames(state)`: get the list of frames

- `getCurrentFrame(state)`: get the current frame, which is going to be played next

- `getCurrent(state)`: get the index of the current frame

- `getIsLooping(state)`: get the looping status

- `getIsShuffle(state)`: get the shuffle status

- `getCanNext(state)`: get if can trigger action `next()`

- `getCanPrevious(state)`: get if can trigger action `previous()`
