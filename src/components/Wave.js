const Wave = () => {
	return (
		<div id="waveContainer">
			<svg viewBox="0 650 1600 200" preserveAspectRatio="none">
				<defs>
					<path id="wave" d="M-363.852,502.589c0,0,236.988-41.997,505.475,0s371.981,38.998,575.971,0s293.985-39.278,505.474,5.859s493.475,48.368,716.963-4.995v560.106H-363.852V502.589z" />
				</defs>
				<g>
				<use xlinkHref='#wave' opacity=".3">
					<animateTransform
					attributeName="transform"
					attributeType="XML"
					type="translate"
					dur="10s"
					calcMode="spline"
					values="270 230; -334 180; 270 230"
					keyTimes="0; .5; 1"
					keySplines="0.42, 0, 0.58, 1.0;0.42, 0, 0.58, 1.0"
					repeatCount="indefinite" />
				</use>
				<use xlinkHref='#wave' opacity=".6">
					<animateTransform
					attributeName="transform"
					attributeType="XML"
					type="translate"
					dur="8s"
					calcMode="spline"
					values="-270 230;243 220;-270 230"
					keyTimes="0; .6; 1"
					keySplines="0.42, 0, 0.58, 1.0;0.42, 0, 0.58, 1.0"
					repeatCount="indefinite" />
				</use>
				<use xlinkHref='#wave' opacty=".9">
					<animateTransform
					attributeName="transform"
					attributeType="XML"
					type="translate"
					dur="6s"
					calcMode="spline"
					values="0 230;-140 200;0 230"
					keyTimes="0; .4; 1"
					keySplines="0.42, 0, 0.58, 1.0;0.42, 0, 0.58, 1.0"
					repeatCount="indefinite" />
				</use>
				</g>
			</svg>
		</div>
	)
}

export default Wave;