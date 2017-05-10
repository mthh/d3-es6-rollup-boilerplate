/* eslint-env browser */

import 'd3-selection-multi';
import { select } from 'd3-selection';
import { geoBounds, geoPath, geoMercator, geoProjection, geoEquirectangular } from 'd3-geo';  // eslint-disable-line no-unused-vars
import { get } from './helpers';

export default class D3Map {
  constructor(selector, width = 600, height = 400) {
    this.container = select(selector)
      .append('svg')
      .attrs({ width, height })
      .append('g');

    this.projection = geoEquirectangular()
      .scale(100)
      .translate([width / 2, height / 2]);

    this.path = geoPath(this.projection);
  }

  drawBaseMap() {
    const path = this.path;
    const container = this.container;
    get('https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_110m_admin_0_countries.geojson')
      .then((result) => {
        const parsed = JSON.parse(result);
        container
          .append('g')
          .attr('id', '#world_countries')
          .styles({ 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
          .selectAll('path')
          .data(parsed.features)
          .enter()
          .append('path')
          .attrs({ d: path, height: '100%', width: '100%' });
      });
  }
}
