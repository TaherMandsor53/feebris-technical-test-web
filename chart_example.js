/**
 * Boilerplate to demonstrate how to use chart.js server-side.
 *
 * Usage:
 *
 *  ```
 *  node chart_example.js
 *  ```
 */
const { CanvasRenderService } = require('chartjs-node-canvas');
const moment = require('moment');
const fs = require('fs');

function ExampleSPO2Graph() {
  const config = {
    type: 'line',
    data: {
      datasets: [
        {
          data: [
            {'x': moment('2020-05-14T16:23:09.738Z'), 'y': 90},
            {'x': moment('2020-05-14T16:23:09.738Z'), 'y': 92},
            {'x': moment('2020-05-14T16:23:09.745Z'), 'y': 94},
            {'x': moment('2020-05-14T16:23:09.745Z'), 'y': 96},
            {'x': moment('2020-05-14T16:23:09.789Z'), 'y': 98},
            {'x': moment('2020-05-14T16:23:09.789Z'), 'y': 100},
            {'x': moment('2020-05-14T16:23:09.789Z'), 'y': 100},
            {'x': moment('2020-05-14T16:23:09.789Z'), 'y': 100},
            {'x': moment('2020-05-14T16:23:09.841Z'), 'y': 100},
            {'x': moment('2020-05-14T16:23:09.841Z'), 'y': 100},
            {'x': moment('2020-05-14T16:23:09.841Z'), 'y': 100},
            {'x': moment('2020-05-14T16:23:09.841Z'), 'y': 100}
          ],
          label: 'Normalised SPO2 data',
          backgroundColor: 'rgba(54, 162, 235, 0.5)', // transparent blue
          borderColor: 'rgb(54, 162, 235)', // blue
          type: 'line',
          pointRadius: 0,
          fill: false,
          lineTension: 0,
          borderWidth: 2,
        },
        {
          data: [
            {'x': moment('2020-05-14T16:23:09.738Z'), 'y': 90},
            {'x': moment('2020-05-14T16:23:09.738Z'), 'y': 92},
            {'x': moment('2020-05-14T16:23:09.745Z'), 'y': 94},
            {'x': moment('2020-05-14T16:23:09.745Z'), 'y': 96},
            {'x': moment('2020-05-14T16:23:09.789Z'), 'y': 98},
            {'x': moment('2020-05-14T16:23:09.789Z'), 'y': 100},
            {'x': moment('2020-05-14T16:23:09.789Z'), 'y': 102},
            {'x': moment('2020-05-14T16:23:09.789Z'), 'y': 104},
            {'x': moment('2020-05-14T16:23:09.841Z'), 'y': 106},
            {'x': moment('2020-05-14T16:23:09.841Z'), 'y': 108},
            {'x': moment('2020-05-14T16:23:09.841Z'), 'y': 110},
            {'x': moment('2020-05-14T16:23:09.841Z'), 'y': 112}
          ],
          label: 'SPO2 data',
          backgroundColor: 'rgba(255, 99, 132, 0.5)', // transparent red
          borderColor: 'rgb(255, 99, 132)', // red
          type: 'line',
          pointRadius: 0,
          fill: false,
          lineTension: 0,
          borderWidth: 2,
        },
      ],
    },
    options: {
      animation: {
        duration: 0
      },
      scales: {
        xAxes: [
          {
            type: 'time',
            distribution: 'series',
            time: {
              unit: 'second'
            },
            ticks: {
              major: {
                enabled: true,
                fontStyle: 'bold'
              },
              source: 'data',
              autoSkip: true,
              autoSkipPadding: 75,
              maxRotation: 0,
              sampleSize: 100
            },
          },
        ]
      }
    }
  }

  const canvasRenderService = new CanvasRenderService(1024, 800);
  return canvasRenderService.renderToBuffer(config);
}

ExampleSPO2Graph()
  .then((imageBuffer) => {
    fs.writeFileSync('chart_example.png', imageBuffer);
  });
