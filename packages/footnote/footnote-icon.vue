<template>
  <svg width="16px" height="16px" fill="#999999" stroke="#eaeaea" viewBox="0 0 16 16" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
      <g transform="translate(-254.000000, -132.000000)">
        <g transform="translate(255.000000, 133.000000)">
          <circle stroke="#eaeaea" cx="7" cy="7" r="7"></circle>
          <text font-family="SFUIText-Bold, SF UI Text" font-size="10" font-weight="bold"
            :fill="isActive ? '#000000' : '#999999'">
            <tspan x="4.25" y="10.5">?</tspan>
          </text>
        </g>
      </g>
    </g>
  </svg>
</template>

<script>
export default {
  name: 'zi-footnote-icon',

  props: {
    isActive: Boolean,
  },
}
</script>
