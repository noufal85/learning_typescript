import { redshiftcluster } from './cluster';

const stage = 'dev';

const cluster_names = Object.keys(redshiftcluster[stage]);
console.log(cluster_names);

for (const cluster_name of cluster_names) {
  console.log(cluster_name);
  console.log(redshiftcluster[stage][cluster_name]);
}
