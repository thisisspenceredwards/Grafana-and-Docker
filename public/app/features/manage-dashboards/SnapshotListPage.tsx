import React, { FC } from 'react';
import { MapStateToProps, connect } from 'react-redux';

import { NavModel } from '@grafana/data';
import Page from 'app/core/components/Page/Page';
import { getNavModel } from 'app/core/selectors/navModel';
import { StoreState } from 'app/types';

import { GrafanaRouteComponentProps } from '../../core/navigation/types';

import { SnapshotListTable } from './components/SnapshotListTable';

interface ConnectedProps {
  navModel: NavModel;
}
interface Props extends ConnectedProps, GrafanaRouteComponentProps {}

export const SnapshotListPage: FC<Props> = ({ navModel, location }) => {
  return (
    <Page navModel={navModel}>
      <Page.Contents>
        <SnapshotListTable />
      </Page.Contents>
    </Page>
  );
};

const mapStateToProps: MapStateToProps<ConnectedProps, {}, StoreState> = (state: StoreState) => ({
  navModel: getNavModel(state.navIndex, 'snapshots'),
});

export default connect(mapStateToProps)(SnapshotListPage);
