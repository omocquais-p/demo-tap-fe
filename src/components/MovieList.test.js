import { render, screen } from '@testing-library/react';
import MovieLIst from './MovieLIst';

test('renders Fetch Movies as a text', () => {
  //Arrange
  render(<MovieLIst />);
  //Act
  // Assert  
  const addNewMovieElement = screen.getByText('Add New Movie');
  expect(addNewMovieElement).toBeInTheDocument(); 
});
