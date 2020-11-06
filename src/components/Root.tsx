import "./Root.scss";
import React, { FormEvent, useState } from "react";
import { api } from "src/index";

interface CompanyProfile {
    symbol: string;
    price: number;
    beta: number;
    volAvg: number;
    mktCap: number;
    lastDiv: number;
    range: string;
    changes: number;
    companyName: string;
    currency: string;
    cik: string;
    isin: string;
    cusip: string;
    exchange: string;
    exchangeShortName: string;
    industry: string;
    website: string;
    description: string;
    ceo: string;
    sector: string;
    country: string;
    fullTimeEmployees: string;
    phone: string;
    address: string;
    city: string;
    state: string;
    zip: string;
    dcfDiff: number;
    dcf: number;
    image: string;
    ipoDate: string;
    defaultImage: string | boolean;
}

const COMPONENT_NAME = "Root";

const Root = () => {
    const [symbol, setSymbol] = useState<string>("");
    const [profile, setProfile] = useState<CompanyProfile | undefined>(undefined);

    const getProfile = (e: FormEvent) => {
        e.preventDefault();

        api.get(
            `/profile/${symbol}?apikey=demo`
        )
            .then(results => {
                console.log("results", results.data[0]);
                setProfile(results.data[0]);
            })
            .catch(e => console.log("Error", e));

    };

    return (
        <div className={COMPONENT_NAME}>
            <form method={"GET"} onSubmit={(e: any) => getProfile(e)}>
                <div className={"FormGroup"}>
                    <input
                        type={"text"}
                        name={"symbol"}
                        value={symbol}
                        placeholder={"Enter stock symbol, ex: AAPL"}
                        onChange={e => setSymbol(e.target.value)}
                    />
                    <button type={"submit"}>Search</button>
                </div>
            </form>

            {profile ? (
                <div className={"CompanyProfile"}>
                    <div className={"Row"}>
                        <div className={"Column"}>
                            <p>
                                <small>Company:</small>
                                <b>{profile.symbol}&nbsp;</b>
                                {profile.companyName}
                            </p>
                        </div>
                        <div className={"Column"}>
                            <p>
                                <small>Price/Changes:</small>
                                <small className={"inline"}>$</small>{profile.price}<small className={"inline"}>{profile.currency}</small>/
                                <span className={`${profile.changes < 0 ? 'text-red' : 'text-green'}`}>{profile.changes}</span>
                            </p>
                        </div>
                    </div>
                    <div className={"Row"}>
                        <div className={"Column"}>
                            <p>
                                <small>Website:</small>
                                <b>{profile.website ?
                                    (<a target="_blank" href={profile.website}>{profile.website}</a>)
                                    : "No website listed..."}
                                </b>
                            </p>
                        </div>
                        <div className={"Column"}>
                            <p>
                                <small>Industry:</small>
                                <b>{profile.industry}</b>
                            </p>
                        </div>
                    </div>
                    <div className={"Row"}>
                        <div className={"Column"}>
                            <p>
                                <small>CEO:</small>
                                <b>{profile.ceo}</b>
                            </p>
                        </div>
                        <div className={"Column"}>
                            <p>
                                <small>Sector:</small>
                                <b>{profile.sector}</b>
                            </p>
                        </div>
                    </div>
                    <div className={"Row"}>
                        <div className={"Column"}>
                            <p>
                                <small>Country:</small>
                                <b>{profile.country}</b>
                            </p>
                        </div>
                        <div className={"Column"}>
                            <p>
                                <small>Employees:</small>
                                <b>{profile.fullTimeEmployees}</b>
                            </p>
                        </div>
                    </div>
                    <div className={"Row"}>
                        <div className={"Column"}>
                            <p>
                                <small>Phone:</small>
                                <b>{profile.phone}</b>
                            </p>
                        </div>
                        <div className={"Column"}>
                            <p>
                                <small>IPO Date:</small>
                                <b>{profile.ipoDate}</b>
                            </p>
                        </div>
                    </div>
                    <div className={"Row"}>
                        <div className={"Column"}>
                            <p>
                                <small>Address:</small>
                                <b>{profile.address}</b>
                            </p>
                        </div>
                        <div className={"Column"}>
                            <p>
                                <small>City:</small>
                                <b>{profile.city}</b>
                            </p>
                        </div>
                    </div>
                    <div className={"Row"}>
                        <div className={"Column"}>
                            <p>
                                <small>State:</small>
                                <b>{profile.state}</b>
                            </p>
                        </div>
                        <div className={"Column"}>
                            <p>
                                <small>Zip:</small>
                                <b>{profile.zip}</b>
                            </p>
                        </div>
                    </div>
                    <div className={"Row"}>
                        <div className={"Column"}>
                            <p className={"text-small"}>
                                <small>Description:</small>
                                {profile.description}
                            </p>
                        </div>
                    </div>
                    <div className={"Row"}>
                        <div className={"Column"}>
                            <p>
                                <small>Traded on:</small>
                                <b>{profile.exchangeShortName}&nbsp;</b>
                                {profile.exchange}
                            </p>
                        </div>
                    </div>
                    <div className={"Row"}>
                        <div className={"Column"}>
                            <p>
                                <small>Vol Avg:</small>
                                <b>{profile.volAvg}</b>
                            </p>
                        </div>
                        <div className={"Column"}>
                            <p>
                                <small>Beta:</small>
                                <b>{profile.beta}</b>
                            </p>
                        </div>
                    </div>
                    <div className={"Row"}>
                        <div className={"Column"}>
                            <p>
                                <small>Market Cap:</small>
                                <b>{profile.mktCap}</b>
                            </p>
                        </div>
                        <div className={"Column"}>
                            <p>
                                <small>Last Div:</small>
                                <b>{profile.lastDiv}</b>
                            </p>
                        </div>
                    </div>
                    <div className={"Row"}>
                        <div className={"Column"}>
                            <p>
                                <small>Range:</small>
                                <b>{profile.range}</b>
                            </p>
                        </div>
                        <div className={"Column"}>
                            <p>
                                <small>DCF Diff:</small>
                                <b>{profile.dcfDiff}</b>
                            </p>
                        </div>
                    </div>
                    <div className={"Row"}>
                        <div className={"Column"}>
                            <p>
                                <small>CIK:</small>
                                <b>{profile.cik}</b>
                            </p>
                        </div>
                        <div className={"Column"}>
                            <p>
                                <small>ISIN:</small>
                                <b>{profile.isin}</b>
                            </p>
                        </div>
                    </div>
                    <div className={"Row"}>
                        <div className={"Column"}>
                            <p>
                                <small>CUSIP:</small>
                                <b>{profile.cusip}</b>
                            </p>
                        </div>
                    </div>
                </div>
            ): (
                <p>Enter a stock symbol above to see details...</p>
            )}
        </div>
    );
};

export { Root };
