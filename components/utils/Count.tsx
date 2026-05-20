"use client";

import CountUp from 'react-countup';

interface IProps {
  number: number;
  duration: number;
}

const Count = (props: IProps) => {
  const { number, duration } = props
  return (
    <div>
      <CountUp duration={duration} end={number} separator="" /> +
    </div>
  );
}

export default Count;
