import { useState, useEffect } from "react"


export default function SnowEffect ( ){

    const [listSnow, setListSnow] = useState([]);

    useEffect(() => {

        let list : Array<String> = [];

        for(let i = 0; i <= 39; i++){
            list.push(i.toString());
        }
       
        setListSnow(list);

    },[])

    return <div className="snowEffect">
        {
            listSnow ? listSnow.map(value=><div className="snow"></div>) : <> </>
        }
        <style jsx>{`
            .snowEffect {
                height: 100%;
                background: radial-gradient(ellipse at bottom, #1b2735 0%, #090a0f 100%);
                overflow: hidden;
                filter: drop-shadow(0 0 10px white);
            }

            @function random_range($min, $max) {
                $rand: random();
                $random_range: $min + floor($rand * (($max - $min) + 1));
                @return $random_range;
            }

            .snow {
                $total: 100;
                position: absolute;
                width: 25px;
                height: 25px;
                background: white;
                border-radius: 50%;

                @for $i from 1 through $total {
                    $random-x: random(1000000) * 0.0001vw;
                    $random-offset: random_range(-100000, 100000) * 0.0001vw;
                    $random-x-end: $random-x + $random-offset;
                    $random-x-end-yoyo: $random-x + ($random-offset / 2);
                    $random-yoyo-time: random_range(30000, 80000) / 100000;
                    $random-yoyo-y: $random-yoyo-time * 100vh;
                    $random-scale: random(10000) * 0.0001;
                    $fall-duration: random_range(10, 30) * 1s;
                    $fall-delay: random(30) * -1s;

                    &:nth-child(#{$i}) {
                    opacity: random(10000) * 0.0001;
                    transform: translate($random-x, -10px) scale($random-scale);
                    animation: fall-#{$i} $fall-duration $fall-delay linear infinite;
                    }

                    @keyframes fall-#{$i} {
                    #{percentage($random-yoyo-time)} {
                        transform: translate($random-x-end, $random-yoyo-y) scale($random-scale);
                    }

                    to {
                        transform: translate($random-x-end-yoyo, 100vh) scale($random-scale);
                    }
                    }
                }
            }
        `}</style>
    </div>
}