import { connectDB } from "@/util/database.js";
import { ObjectId } from "mongodb";
import styles from './Detail.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faIndustry, faMapMarkerAlt, faHandHoldingUsd, faUsers, faChartLine, faInfoCircle} from '@fortawesome/free-solid-svg-icons'

export default async function Detail(props) {
    const db = (await connectDB).db('Amplify00');
    let result = await db.collection('Startups.amplify').findOne({ _id: new ObjectId(props.params.id) });

    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <h1 className={styles.logo}>Amplify DataBase</h1>
                <nav className={styles.navbar}>
                    <a href="/list">Startups</a>
                    <a href={result ? result.Website : "No Data yet"}>Visit their Website</a>
                </nav>
            </header>

            <section className={styles.companyProfile}>
                <div className={styles.companyHeader}>
                    <h2 className={styles.companyName}>{result ? result['Organization Name'] : "No Data yet"}</h2>
                    <div className={styles.companyMetrics}>
                        <div className={styles.metric}>
                            <span className={styles.metricLabel}>Last Funding Type:</span>
                            <span className={styles.metricValue}>{result ? result["Last Funding Type"] : "No Data yet"}</span>
                        </div>
                        <div className={styles.metric}>
                            <span className={styles.metricLabel}>Last Equity Funding Type:</span>
                            <span className={styles.metricValue}>{result ? result["Last Equity Funding Type"] : "No Data yet"}</span>
                        </div>
                        <div className={styles.metric}>
                            <span className={styles.metricLabel}>Total Funding:</span>
                            <span className={styles.metricValue}>{result ? result["Total Funding Amount"] : "No Data yet"}</span>
                        </div>
                        <div className={styles.metric}>
                            <span className={styles.metricLabel}>Total Equity Funding:</span>
                            <span className={styles.metricValue}>{result ? result["Total Equity Funding Amount"] : "No Data yet"}</span>
                        </div>
                    </div>
                </div>

                <div className={styles.companyDetails}>
                    <div className={styles.detailRow}>
                        <label>
                        <FontAwesomeIcon icon={faIndustry} className={styles.icon} />
                            Industry Groups:
                        </label>
                        <span>{result ? result["Industry Groups"] : "No Data yet"}</span>
                    </div>
                    <div className={styles.detailRow}>
                        <label>
                        <FontAwesomeIcon icon={faMapMarkerAlt} className={styles.icon} />
                            Headquarters Location:
                        </label>
                        <span>{result ? result["Headquarters Location"] : "No Data yet"}</span>
                    </div>
                    <div className={styles.detailRow}>
                        <label>
                        <FontAwesomeIcon icon={faHandHoldingUsd} className={styles.icon} />
                            Investors:
                        </label>
                        <span>{result ? result["Number of Investors"] : "No Data yet"}</span>
                    </div>
                    <div className={styles.detailRow}>
                        <label>
                        <FontAwesomeIcon icon={faUsers} className={styles.icon} />
                            Employees:
                        </label>
                        <span>{result ? result["Number of Employees"] : "No Data yet"}</span>
                    </div>
                    <div className={styles.detailRow}>
                        <label>
                        <FontAwesomeIcon icon={faChartLine} className={styles.icon} />        
                            IPO Status:
                        </label>
                        <span>{result ? result["IPO Status"] : "No Data yet"}</span>
                    </div>
                    <div className={styles.detailRow}>
                        <label>
                        <FontAwesomeIcon icon={faInfoCircle} className={styles.icon} /> 
                            Description:
                        </label>
                        <span>{result ? result["Description"] : "No Data yet"}</span>
                    </div>
                </div>
            </section>

            <footer className={styles.footer}>
                Amplify DataBase &copy; 2023. All rights reserved.
            </footer>
        </div>
    );
}
