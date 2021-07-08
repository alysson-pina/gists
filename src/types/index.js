import PropTypes from 'prop-types';

const OwnerType = {
  owner: PropTypes.shape({
    id: PropTypes.number,
    login: PropTypes.string,
    avatar_url: PropTypes.string,
    url: PropTypes.string
  })
}

export {
  OwnerType
}
