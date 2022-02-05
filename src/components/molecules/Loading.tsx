import Loader, { LoaderProps } from 'react-loader-spinner';

type TLoaderType = LoaderProps['type'];

export const Loading = ({
  width,
  height,
  widthOff = 0,
  heightOff = 0
}: {
  width: number;
  height: number;
  widthOff?: number;
  heightOff?: number;
}) => {
  const getAudioLoaderType = (): TLoaderType => {
    const types = [
      'Audio',
      'BallTriangle',
      'Bars',
      'Circles',
      'Grid',
      'Hearts',
      'Oval'
      // 'Puff',
      // 'Rings',
      // 'TailSpin',
      // 'ThreeDots',
      // 'Watch',
      // 'RevolvingDot',
      // 'Triangle',
      // 'Plane',
      // 'MutatingDots',
      // 'CradleLoader'
    ] as const;
    const n = types.length;
    const i = Math.floor(Math.random() * n) % n;
    return types[i];
  };
  const loaderType = getAudioLoaderType();
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        zIndex: 2,
        // backgroundColor: 'black',
        // opacity: '0.5',
        width: `calc(100% - ${widthOff}px)`,
        height: `calc(100% - ${heightOff}px)`,
        padding: '10px 10px 10px 10px'
      }}
    >
      <Loader type={loaderType} color="#abaebd" height={height} width={width} />
    </div>
  );
};
