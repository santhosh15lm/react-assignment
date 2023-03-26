import React from 'react'
import {Animated} from 'react-native'
export default function Animated_Card() {
    const colors = ['#5C6BC0', '#009688', '#F44336'];
  return (
<div>    // parent div
  <div    // last card
    style={{
    width: 300, height: 150,
    position: 'absolute',
    zIndex: 1,
    bottom: 40,
    backgroundColor: colors[2], // Red
    opacity: 0.3,
    transform: [ { scale: 0.80 } ],
  }} />
  <div    // second card
    style={{
    width: 300, height: 150,
    position: 'absolute',
    zIndex: 2,
    bottom: 20,
    backgroundColor: colors[1], // Green
    opacity: 0.6,
    transform: [ { scale: 0.90 } ],
  }} />
  <div    // frontmost card
    style={{
    width: 300, height: 150,
    position: 'absolute',
    zIndex: 3,
    bottom: 0,
    backgroundColor: colors[0], // Blue
    opacity: 1,
    transform: [ { scale: 1.0 } ],
  }} />
</div>
  )
}
