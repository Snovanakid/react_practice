import styles from "../section/section.module.css"

export function Section({ title, children }) {
    return (
        <section className={title ? styles.superSection : styles.section}>
            {title && (<h2>{title}</h2>)}      
            {children}
        </section>
    )
}