export interface redshiftcluster {
  [stage: string]: {
    [cluster_id: string]: {
      clusterName: string;
      node_type: string;
      node_count: number;
    };
  };
}

export const redshiftcluster: redshiftcluster = {
  dev: {
    redshiftcluster001: {
      clusterName: 'redshiftcluster',
      node_type: 'dc2.large',
      node_count: 2,
    },
    redshiftcluster002: {
      clusterName: 'redshiftcluster',
      node_type: 'dc2.large',
      node_count: 2,
    },
  },
  prod: {
    redshiftcluster: {
      clusterName: 'redshiftcluster',
      node_type: 'dc2.large',
      node_count: 2,
    },
  },
};
