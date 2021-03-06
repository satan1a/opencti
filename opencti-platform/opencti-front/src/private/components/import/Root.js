import React from 'react';
import * as PropTypes from 'prop-types';
import { QueryRenderer } from '../../../relay/environment';
import Import, { ImportQuery } from './Import';
import Loader from '../../../components/Loader';

const RootImport = () => (
      <QueryRenderer
        query={ImportQuery}
        variables={{}}
        render={({ props }) => {
          if (props) {
            return (
              <Import
                connectorsImport={props.connectorsForImport}
                importFiles={props.importFiles}
              />
            );
          }
          return <Loader />;
        }}
      />
);

RootImport.propTypes = {
  children: PropTypes.node,
};

export default RootImport;
