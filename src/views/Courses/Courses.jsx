import React from 'react';

import Main from 'layouts/main/Main';
import { courseCards } from 'data/data';

import { CoursesContainer } from './Courses.styles';
import CourseCard from 'components/Card/CourseCard';

const Courses = () => {
  return (
    <Main>
      <CoursesContainer>
        {React.Children.toArray(
          courseCards.map((c) => (
            <CourseCard
              title={c.title}
              videosNumber={c.views}
              price={c.price}
              image={c.image}
            />
          ))
        )}
      </CoursesContainer>
    </Main>
  );
};

export default Courses;
