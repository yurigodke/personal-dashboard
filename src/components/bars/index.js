import style from './style.module.scss';

function Bars({title, targetItem, completeItem, color = '#000'}) {
    let completePercent = 100;
    if (completeItem.value < targetItem.value) {
        completePercent = (completeItem.value*100) / targetItem.value;
    } else {
        completePercent = (targetItem.value*100) / completeItem.value;
    }

    return <div className={style['main']}>
        <div className={style['title']}>{title}</div>
        <div className={style['bar']} style={{backgroundColor: color}}>
            <div className={style['bar__fill']} style={{width: `${completePercent}%`}}></div>
        </div>
        <div className={style['infos']}>
            <div className={style['infos__item']}>Concluído: <strong>{completeItem.label}</strong></div>
            <div className={style['infos__item']}>Total: <strong>{targetItem.label}</strong></div>
        </div>
    </div>
}

export default Bars;