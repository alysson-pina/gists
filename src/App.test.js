import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Octokit } from '@octokit/core';
import App from '../src/App';

const gistsMock = [
  {
    url: 'url',
    id: 'aaa',
    files: {
      'file.js': {
        filename: 'file.js',
        type: 'application/javascript',
        language: 'JavaScript',
        raw_url: 'https://file.js',
      },
    },
    created_at: '2019-12-29T13:48:14Z',
    updated_at: '2019-12-29T13:48:14Z',
    description: 'Calculate sth',
    owner: {
      login: 'test',
      id: 111,
      avatar_url: 'avatar',
      url: 'https://url',
    },
  },
];

const mockedResponse = {
  data: gistsMock,
  status: 200,
};

describe('App test suite', () => {
  beforeEach(() => {
    render(<App />);
  });

  it('renders input field and search buttons', async () => {
    const button = await screen.findByText('Search');
    const searchbox = await screen.findByRole('searchbox');

    expect(button).toBeDefined(); // TODO: replace with toBeInTheDocument
    expect(searchbox).toBeDefined(); // TODO: replace with toBeInTheDocument
  });

  it('renders gist when clicking on searchbox', async () => {
    jest.spyOn(Octokit.prototype, 'request').and.mockImplementation(() => mockedResponse);

    const searchbox = await screen.findByRole('searchbox');
    const button = await screen.findByText('Search');

    fireEvent.change(searchbox, { target: { value: 'test123' } });
    fireEvent.click(button);

    const tag = await screen.findByRole('application/javascript');
    expect(tag).toBeDefined(); // TODO: replace with toBeInTheDocument
  });
});
