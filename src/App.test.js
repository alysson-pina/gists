import React from 'react';
import { render, screen, fireEvent, act } from '@testing-library/react';
import * as Octokit from '@octokit/request';
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

  describe('basic structure', () => {
    it('renders input field and search buttons', async () => {
      const button = await screen.findByText('Search');
      const searchbox = await screen.findByRole('searchbox');
  
      expect(button).toBeInTheDocument();
      expect(searchbox).toBeInTheDocument();
    });
  })

  describe('when data is available', () => {
    it('renders gist when clicking on searchbox', async () => {
      jest.spyOn(Octokit, 'request').mockImplementation(() => mockedResponse);
  
      const searchbox = await screen.findByRole('searchbox');
      const button = await screen.findByText('Search');

      fireEvent.change(searchbox, { target: { value: 'test123' } });
      act(() => {
        fireEvent.click(button);
      })
  
      const tag = await screen.findByText('application/javascript');
      expect(tag).toBeInTheDocument();

      const gistLink = await screen.findByText('Gist URL');
      expect(gistLink).toBeInTheDocument();

      // username should be present
      const username = await screen.findByText(gistsMock[0].owner.login);
      expect(username).toBeInTheDocument();

      // avatar is present
      const avatar = await screen.findByRole('img');
      expect(avatar).toBeInTheDocument();
    });
  })

  describe('when data is unavailable', () => {
    it('does not render any other info', async () => {
      jest.spyOn(Octokit, 'request').mockImplementation(() => []);
  
      const searchbox = await screen.findByRole('searchbox');
      const button = await screen.findByText('Search');
  
      act(() => {
        fireEvent.change(searchbox, { target: { value: 'test123' } });
        fireEvent.click(button);
      })

      //no links are present
      const links = screen.queryAllByRole('link');
      expect(links).toHaveLength(0);

      // no avatar is present
      const avatar = screen.queryByRole('img');
      expect(avatar).not.toBeInTheDocument();
    });
  })
});
