import { LoadingInitial, Logo } from './LoadingComponent.styled';
import PropTypes from 'prop-types';	

const LoadingComponentInitial = ({ isLoading }) => {
    return (
        <>
      {isLoading && (
        <LoadingInitial>
          <Logo>Galeria de Fotos</Logo>
        </LoadingInitial>
      )}
    </>
  );
};

LoadingComponentInitial.propTypes = {
    isLoading: PropTypes.bool.isRequired,
};

export default LoadingComponentInitial;
