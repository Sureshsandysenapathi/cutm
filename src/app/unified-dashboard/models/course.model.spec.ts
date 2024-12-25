import { Course } from './course.model';

describe('Course', () => {
  it('should create an instance', () => {
    const course = new Course(
      '1',             // id
      'Sample Title',   // title
      'Description',    // description
      'Category',       // category
      120               // duration
    );
    expect(course).toBeTruthy();
  });
});
