import React, { useState } from "react";
import { useParams } from 'react-router-dom';


function Invoice() {

    const { id } = useParams();


    return (



        <div class="container">
            <div class="row gutters">
                <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                    <div class="card">
                        <div class="card-body p-0">
                            <div class="invoice-container">
                                <div class="invoice-header">

                                    <div class="row gutters">
                                        <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                                            <div class="custom-actions-btns mb-5">
                                                <a href="#" class="btn btn-primary">
                                                    <i class="icon-download"></i> Download
                                                </a>
                                                <a href="#" class="btn btn-secondary">
                                                    <i class="icon-printer"></i> Print
                                                </a>
                                            </div>
                                        </div>
                                    </div>


                                    <div class="row gutters">
                                        <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                                            <a href="index.html" class="invoice-logo">
                                                Bootdey.com {id}
                                            </a>
                                        </div>
                                        <div class="col-lg-6 col-md-6 col-sm-6">


                                        </div>


                                        <div class="row gutters">
                                            <div class="col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12">
                                                <div class="invoice-details">
                                                    <address>
                                                        Alex Maxwell
                                                        150-600 Church Street, Florida, USA
                                                    </address>
                                                </div>
                                            </div>
                                            <div class="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12">
                                                <div class="invoice-details">
                                                    <div class="invoice-num">
                                                        <div>Invoice - #009</div>
                                                        <div>January 10th 2020</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                    <div class="invoice-body">

                                        <div class="row gutters">
                                            <div class="col-lg-12 col-md-12 col-sm-12">
                                                <div class="table-responsive">
                                                    <table class="table custom-table m-0">
                                                        <thead>
                                                            <tr>
                                                                <th>Items</th>
                                                                <th>Product ID</th>
                                                                <th>Quantity</th>
                                                                <th>Sub Total</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <td>
                                                                    Wordpress Template
                                                                    <p class="m-0 text-muted">
                                                                        Reference site about Lorem Ipsum, giving information on its origins.
                                                                    </p>
                                                                </td>
                                                                <td>#50000981</td>
                                                                <td>9</td>
                                                                <td>$5000.00</td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    Maxwell Admin Template
                                                                    <p class="m-0 text-muted">
                                                                        As well as a random Lipsum generator.
                                                                    </p>
                                                                </td>
                                                                <td>#50000126</td>
                                                                <td>5</td>
                                                                <td>$100.00</td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    Unify Admin Template
                                                                    <p class="m-0 text-muted">
                                                                        Lorem ipsum has become the industry standard.
                                                                    </p>
                                                                </td>
                                                                <td>#50000821</td>
                                                                <td>6</td>
                                                                <td>$49.99</td>
                                                            </tr>
                                                            <tr>
                                                                <td>&nbsp;</td>
                                                                <td colspan="2">

                                                                    Subtotal
                                                                    Shipping &amp; Handling
                                                                    Tax

                                                                    <h5 class="text-success"><strong>Grand Total</strong></h5>
                                                                </td>
                                                                <td>

                                                                    $5000.00
                                                                    $100.00
                                                                    $49.00

                                                                    <h5 class="text-success"><strong>$5150.99</strong></h5>
                                                                </td>
                                                            </tr>
                                                        </tbody>

                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    );
}

export default Invoice;

