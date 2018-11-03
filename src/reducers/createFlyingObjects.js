import constants from '../utils/constants';

export default (state) => {
  if (!state.gameState.started) return state; // game not running

  const now = (new Date()).getTime();
  const {
    lastObjectCreatedAt,
    flyingObjects
  } = state.gameState;
  const createNewObject = (
    now - (lastObjectCreatedAt).getTime() > constants.createInterval &&
    flyingObjects.length < constants.maxFlyingObjects
  );

  if (!createNewObject) return state; // no need to create objects now

  const id = (new Date()).getTime();
  const predefinedPosition = Math.floor(Math.random() * constants.maxFlyingObjects);
  const flyingObjectPosition = constants.flyingObjectsStarterPositions[predefinedPosition];
  const newFlyingObject = {
    position: {
      x: flyingObjectPosition,
      y: constants.flyingObjectsStarterYAxis,
    },
    createdAt: (new Date()).getTime(),
    id,
  };

  return {
    ...state,
    gameState: {
      ...state.gameState,
      flyingObjects: [
        ...state.gameState.flyingObjects,
        newFlyingObject
      ],
      lastObjectCreatedAt: new Date(),
    }
  }
}