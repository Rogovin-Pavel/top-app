import React, { useState, useEffect, KeyboardEvent } from 'react';
import cn from 'classnames';

import { RatingProps } from './Rating.props';
import styles from './Rating.module.css';

import StarIcon from './star.svg';

export const Rating = ({ rating, setRating, isEditable = false, ...props }: RatingProps): JSX.Element => {
  const [ratingArray, setRatingArray] = useState<JSX.Element[]>(new Array(5).fill(<></>));

  const changeDisplay = (rating: number) => {
    if (!isEditable) {
      return;
    }

    constructRating(rating);
  };

  const onClick = (newRating: number): void => {
    if (setRating && isEditable) {
      setRating(newRating);
    }
  };
  const handleSpace = (newRating: number, e: KeyboardEvent<SVGAElement>): void => {
    if (setRating && e.code === 'Space') {
      setRating(newRating);
    }
  };

  const constructRating = (currentRating: number) => {
    const updatedArray = ratingArray.map((star: JSX.Element, i): JSX.Element => {
      return (
        <span
          className={cn(styles.star, {
            [styles.filled]: i < currentRating,
            [styles.editable]: isEditable,
          })}
          onClick={() => onClick(i + 1)}
          onMouseEnter={() => changeDisplay(i + 1)}
          onMouseLeave={() => changeDisplay(rating)}
        >
          <StarIcon
            tabIndex={isEditable ? 0 : -1}
            onKeyDown={(e: KeyboardEvent<SVGAElement>) => isEditable && handleSpace(i + 1, e)}
          />
        </span>
      );
    });

    setRatingArray(updatedArray);
  };

  useEffect(() => {
    constructRating(rating);
  }, [rating]);

  return (
    <div {...props}>
      {ratingArray.map((ratingElement, i) => (
        <span key={i}>{ratingElement}</span>
      ))}
    </div>
  );
};
