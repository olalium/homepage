import React, {Component} from 'react'
import * as THREE from 'three';
import { OBJLoader2 } from 'three/examples/jsm/loaders/OBJLoader2.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import './ThreeScene.css';


class ThreeScene extends Component {
    constructor(props) {
         super(props);
     }

    componentDidMount() {
        const loader = new OBJLoader2();
        const width = this.mount.clientWidth
        const height = this.mount.clientHeight

        const scene = new THREE.Scene()
        const camera = new THREE.PerspectiveCamera(
            50,
            width / height,
            0.1,
            1000
        )
        // const color = 0xFFFFFF;
        // const intensity = 0.007;
        // const light = new THREE.DirectionalLight(color, intensity);
        // light.position.set(5, 200, 500);
        // scene.add(light);
        // scene.add(light.target);

        var light = new THREE.AmbientLight( 0x404040, 0.018); // soft white light
        scene.add( light );
        scene.add( light.target );
        
        
        const renderer = new THREE.WebGLRenderer({ antialias: true })
        
        renderer.setClearColor('#FFFFFF')
        renderer.setSize(width, height)
        
        var controls = new OrbitControls(camera, renderer.domElement);

        this.mount.appendChild(renderer.domElement)
        
        function callbackOnLoad( object3d ) {
            scene.add ( object3d );
            scene.translateX(-200);
            scene.translateY(-100)

            object3d.traverse(node => {
                if (node.material) {
                    if (Array.isArray(node.material)) {
                        node.material.forEach(m => m.vertexColors = true);
                    } else {
                        node.material.vertexColors = true;
                    }
                }
            });
        };

        loader.load(this.props.url, callbackOnLoad, null, null, null)

        camera.position.z = 750
        camera.position.x = 0
        camera.position.y = 0

        controls.update();

        var animate = function () {
            requestAnimationFrame( animate );
            controls.update();
            renderer.render( scene, camera );
        };

        animate();
    }

    componentWillUnmount() {
        this.stop()
        this.mount.removeChild(this.renderer.domElement)
    }

    render() {
    return (
        <div
            id="c"
            style={{ width: '500px', height: '500px' }}
            ref={(mount) => { this.mount = mount }}
        />
    )
    }
}

export default ThreeScene;
