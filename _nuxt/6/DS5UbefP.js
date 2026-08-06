try {
    let t = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
        e = new t.Error().stack;
    e && (t._sentryDebugIds = t._sentryDebugIds || {}, t._sentryDebugIds[e] = "8497505b-9e83-46af-9e8a-e69d4cd1c1fe", t._sentryDebugIdIdentifier = "sentry-dbid-8497505b-9e83-46af-9e8a-e69d4cd1c1fe")
} catch {}
const i = {
    mainTitle: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "#1 Super app for all home services"
        }
    },
    mainTitleForCity: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Expert Home Services by Trusted Professionals"
        }
    },
    yes: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Yes"
        }
    },
    no: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "No"
        }
    },
    address: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Address"
        }
    },
    frequency: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Frequency"
        }
    },
    service: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Service"
        }
    },
    date_and_start_time: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Date & Start Time"
        }
    },
    pickup_date: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Pick-up Date"
        }
    },
    dropoff_date: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Drop-off Date"
        }
    },
    service_details: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Service Details"
        }
    },
    stepProgress: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3,
                v: "Step "
            }, {
                t: 4,
                k: "active"
            }, {
                t: 3,
                v: " of "
            }, {
                t: 4,
                k: "max"
            }]
        }
    },
    packages: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Frequency"
        }
    },
    details: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Service Details"
        }
    },
    dateAndTime: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Date & Time"
        }
    },
    checkout: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Checkout"
        }
    },
    booking_details: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Booking Details"
        }
    },
    payment_summary: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Payment Summary"
        }
    },
    addons: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Popular Add-ons"
        }
    },
    next: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Next"
        }
    },
    select: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Select"
        }
    },
    change: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Change"
        }
    },
    complete: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Complete"
        }
    },
    see_all: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "See all"
        }
    },
    add_attribute: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3,
                v: "Add for "
            }, {
                t: 4,
                k: "price"
            }]
        }
    },
    add_new_address: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Add New Address"
        }
    },
    select_payment_method: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Select payment method"
        }
    },
    add_new_card: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Add New Card"
        }
    },
    select_another_address: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Select another address"
        }
    },
    see_details: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "See details"
        }
    },
    select_date: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Select Date"
        }
    },
    charge_info: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 4,
                k: "price"
            }, {
                t: 3,
                v: " will be charged to verify your card. The amount will be refunded immediately."
            }]
        }
    },
    card_reserve_info: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "The session amount will be reserved on your card. You will only be charged once the session is completed."
        }
    },
    service_times_title: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Service Start Time"
        }
    },
    service_times_careem_info_text: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3,
                v: "Service will take approximately "
            }, {
                t: 4,
                k: "time"
            }, {
                t: 3,
                v: " and ends between "
            }, {
                t: 4,
                k: "endTime"
            }, {
                t: 3,
                v: "."
            }]
        }
    },
    service_times_info_text_1: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3,
                v: "Service will take approximately "
            }, {
                t: 4,
                k: "time"
            }]
        }
    },
    service_times_info_text_2: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3,
                v: "Service starts between "
            }, {
                t: 4,
                k: "time"
            }]
        }
    },
    service_times_info_text_3: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3,
                v: "Service finishes between "
            }, {
                t: 4,
                k: "time"
            }]
        }
    },
    service_times_info_text_1_hrs: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 4,
                k: "hours"
            }, {
                t: 3,
                v: " hrs"
            }]
        }
    },
    service_times_info_text_1_min: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 4,
                k: "mins"
            }, {
                t: 3,
                v: " min"
            }]
        }
    },
    service_payment_modal_title: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Change Payment Method"
        }
    },
    payment_method_title: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Payment Method"
        }
    },
    forms: {
        errors: {
            required: {
                t: 0,
                b: {
                    t: 2,
                    i: [{
                        t: 3
                    }],
                    s: "*Required"
                }
            },
            valid_email: {
                t: 0,
                b: {
                    t: 2,
                    i: [{
                        t: 3
                    }],
                    s: "Please enter a valid e-mail."
                }
            }
        },
        address: {
            title: {
                t: 0,
                b: {
                    t: 2,
                    i: [{
                        t: 3
                    }],
                    s: "Address Details"
                }
            },
            tags: {
                home: {
                    t: 0,
                    b: {
                        t: 2,
                        i: [{
                            t: 3
                        }],
                        s: "Home"
                    }
                },
                work: {
                    t: 0,
                    b: {
                        t: 2,
                        i: [{
                            t: 3
                        }],
                        s: "Work"
                    }
                },
                other: {
                    t: 0,
                    b: {
                        t: 2,
                        i: [{
                            t: 3
                        }],
                        s: "Other"
                    }
                }
            },
            address: {
                t: 0,
                b: {
                    t: 2,
                    i: [{
                        t: 3
                    }],
                    s: "Address"
                }
            },
            building: {
                t: 0,
                b: {
                    t: 2,
                    i: [{
                        t: 3
                    }],
                    s: "Building Name"
                }
            },
            address_build: {
                t: 0,
                b: {
                    t: 2,
                    i: [{
                        t: 3
                    }],
                    s: "Address /assets-local/bd0188b5c32d91f9.binassets-local/assets-local/bd0188b5c32d91f9.binbd0188b5c32d91f9.binassets-local/assets-local/bd0188b5c32d91f9.binassets-local/assets-local/bd0188b5c32d91f9.binbd0188b5c32d91f9.binbd0188b5c32d91f9.bin Building Name"
                }
            },
            flat_villa_no: {
                t: 0,
                b: {
                    t: 2,
                    i: [{
                        t: 3
                    }],
                    s: "Flat /assets-local/bd0188b5c32d91f9.binassets-local/assets-local/bd0188b5c32d91f9.binbd0188b5c32d91f9.binassets-local/assets-local/bd0188b5c32d91f9.binassets-local/assets-local/bd0188b5c32d91f9.binbd0188b5c32d91f9.binbd0188b5c32d91f9.bin Villa No."
                }
            },
            directions: {
                t: 0,
                b: {
                    t: 2,
                    i: [{
                        t: 3
                    }],
                    s: "Directions"
                }
            },
            street_name: {
                t: 0,
                b: {
                    t: 2,
                    i: [{
                        t: 3
                    }],
                    s: "Street Name"
                }
            },
            primary_button: {
                t: 0,
                b: {
                    t: 2,
                    i: [{
                        t: 3
                    }],
                    s: "Save Address"
                }
            }
        },
        personal_details: {
            title: {
                t: 0,
                b: {
                    t: 2,
                    i: [{
                        t: 3
                    }],
                    s: "Personal Details"
                }
            },
            info_card: {
                t: 0,
                b: {
                    t: 2,
                    i: [{
                        t: 3
                    }],
                    s: "This information helps us refer you to relevant Justlife services."
                }
            },
            gender: {
                label: {
                    t: 0,
                    b: {
                        t: 2,
                        i: [{
                            t: 3
                        }],
                        s: "Gender"
                    }
                },
                female: {
                    t: 0,
                    b: {
                        t: 2,
                        i: [{
                            t: 3
                        }],
                        s: "Female"
                    }
                },
                male: {
                    t: 0,
                    b: {
                        t: 2,
                        i: [{
                            t: 3
                        }],
                        s: "Male"
                    }
                },
                not_specified: {
                    t: 0,
                    b: {
                        t: 2,
                        i: [{
                            t: 3
                        }],
                        s: "Rather Not Say"
                    }
                }
            },
            contact_info: {
                t: 0,
                b: {
                    t: 2,
                    i: [{
                        t: 3
                    }],
                    s: "Contact Information"
                }
            },
            name: {
                t: 0,
                b: {
                    t: 2,
                    i: [{
                        t: 3
                    }],
                    s: "Full Name"
                }
            },
            email: {
                t: 0,
                b: {
                    t: 2,
                    i: [{
                        t: 3
                    }],
                    s: "Email Address"
                }
            },
            primary_button: {
                t: 0,
                b: {
                    t: 2,
                    i: [{
                        t: 3
                    }],
                    s: "Save Information"
                }
            }
        },
        other: {
            optional: {
                t: 0,
                b: {
                    t: 2,
                    i: [{
                        t: 3
                    }],
                    s: "Optional"
                }
            }
        }
    },
    account: {
        upcoming: {
            t: 0,
            b: {
                t: 2,
                i: [{
                    t: 3
                }],
                s: "Upcoming"
            }
        },
        past: {
            t: 0,
            b: {
                t: 2,
                i: [{
                    t: 3
                }],
                s: "Past"
            }
        },
        btn_title_2: {
            t: 0,
            b: {
                t: 2,
                i: [{
                    t: 3
                }],
                s: "Reschedule"
            }
        },
        btn_title_3: {
            t: 0,
            b: {
                t: 2,
                i: [{
                    t: 3
                }],
                s: "Cancel This Booking"
            }
        },
        btn_title_9: {
            t: 0,
            b: {
                t: 2,
                i: [{
                    t: 3
                }],
                s: "Cancel This Booking Only"
            }
        },
        settings: {
            account_settings: {
                profile: {
                    t: 0,
                    b: {
                        t: 2,
                        i: [{
                            t: 3
                        }],
                        s: "Profile"
                    }
                },
                bookings: {
                    t: 0,
                    b: {
                        t: 2,
                        i: [{
                            t: 3
                        }],
                        s: "Bookings"
                    }
                },
                justlife_credits: {
                    t: 0,
                    b: {
                        t: 2,
                        i: [{
                            t: 3
                        }],
                        s: "Justlife Credits"
                    }
                },
                referrals_credits: {
                    t: 0,
                    b: {
                        t: 2,
                        i: [{
                            t: 3
                        }],
                        s: "Referral Credits"
                    }
                },
                addresses: {
                    t: 0,
                    b: {
                        t: 2,
                        i: [{
                            t: 3
                        }],
                        s: "Addresses"
                    }
                },
                payment_methods: {
                    t: 0,
                    b: {
                        t: 2,
                        i: [{
                            t: 3
                        }],
                        s: "Payment Methods"
                    }
                }
            },
            details: {
                mobile_number: {
                    label: {
                        t: 0,
                        b: {
                            t: 2,
                            i: [{
                                t: 3
                            }],
                            s: "Mobile number"
                        }
                    }
                },
                name: {
                    label: {
                        t: 0,
                        b: {
                            t: 2,
                            i: [{
                                t: 3
                            }],
                            s: "Your full name"
                        }
                    },
                    placeholder: {
                        t: 0,
                        b: {
                            t: 2,
                            i: [{
                                t: 3
                            }],
                            s: "Enter your full name"
                        }
                    },
                    error: {
                        t: 0,
                        b: {
                            t: 2,
                            i: [{
                                t: 3
                            }],
                            s: "Please enter your full name."
                        }
                    }
                },
                email: {
                    label: {
                        t: 0,
                        b: {
                            t: 2,
                            i: [{
                                t: 3
                            }],
                            s: "Email"
                        }
                    },
                    placeholder: {
                        t: 0,
                        b: {
                            t: 2,
                            i: [{
                                t: 3
                            }, {
                                t: 9
                            }, {
                                t: 3
                            }],
                            s: "e.g. name@example.com"
                        }
                    },
                    error: {
                        t: 0,
                        b: {
                            t: 2,
                            i: [{
                                t: 3
                            }],
                            s: "Please enter a valid e-mail."
                        }
                    }
                },
                date_of_birth: {
                    label: {
                        t: 0,
                        b: {
                            t: 2,
                            i: [{
                                t: 3
                            }],
                            s: "Date of Birth (Optional)"
                        }
                    },
                    placeholder: {
                        t: 0,
                        b: {
                            t: 2,
                            i: [{
                                t: 3
                            }],
                            s: "DD-MM-YYYY"
                        }
                    }
                },
                gender: {
                    placeholder: {
                        t: 0,
                        b: {
                            t: 2,
                            i: [{
                                t: 3
                            }],
                            s: "Gender (Optional)"
                        }
                    },
                    male: {
                        t: 0,
                        b: {
                            t: 2,
                            i: [{
                                t: 3
                            }],
                            s: "Male"
                        }
                    },
                    female: {
                        t: 0,
                        b: {
                            t: 2,
                            i: [{
                                t: 3
                            }],
                            s: "Female"
                        }
                    }
                },
                save: {
                    t: 0,
                    b: {
                        t: 2,
                        i: [{
                            t: 3
                        }],
                        s: "Save"
                    }
                }
            },
            addresses: {
                no_address: {
                    t: 0,
                    b: {
                        t: 2,
                        i: [{
                            t: 3
                        }],
                        s: "You don't have any address"
                    }
                },
                delete: {
                    question: {
                        t: 0,
                        b: {
                            t: 2,
                            i: [{
                                t: 3
                            }],
                            s: "Are you sure you want to delete this address?"
                        }
                    },
                    info: {
                        t: 0,
                        b: {
                            t: 2,
                            i: [{
                                t: 3
                            }],
                            s: "Your address will be deleted."
                        }
                    },
                    button: {
                        t: 0,
                        b: {
                            t: 2,
                            i: [{
                                t: 3
                            }],
                            s: "Delete"
                        }
                    }
                }
            },
            credit_cards: {
                no_credit_cards: {
                    t: 0,
                    b: {
                        t: 2,
                        i: [{
                            t: 3
                        }],
                        s: "You don’t have a registered credit card"
                    }
                },
                add_new: {
                    t: 0,
                    b: {
                        t: 2,
                        i: [{
                            t: 3
                        }],
                        s: "Add New"
                    }
                },
                your_credit_cards: {
                    t: 0,
                    b: {
                        t: 2,
                        i: [{
                            t: 3
                        }],
                        s: "Your saved credit cards"
                    }
                },
                delete_button: {
                    t: 0,
                    b: {
                        t: 2,
                        i: [{
                            t: 3
                        }],
                        s: "Delete"
                    }
                }
            }
        },
        appointments: {
            status_title: {
                confirmed: {
                    t: 0,
                    b: {
                        t: 2,
                        i: [{
                            t: 3
                        }],
                        s: "Confirmed"
                    }
                },
                professional_assigned: {
                    t: 0,
                    b: {
                        t: 2,
                        i: [{
                            t: 3
                        }],
                        s: "Professional assigned"
                    }
                },
                on_the_way: {
                    t: 0,
                    b: {
                        t: 2,
                        i: [{
                            t: 3
                        }],
                        s: "On the way"
                    }
                },
                in_progress: {
                    t: 0,
                    b: {
                        t: 2,
                        i: [{
                            t: 3
                        }],
                        s: "In progress"
                    }
                },
                completed: {
                    t: 0,
                    b: {
                        t: 2,
                        i: [{
                            t: 3
                        }],
                        s: "Completed"
                    }
                },
                cancelled: {
                    t: 0,
                    b: {
                        t: 2,
                        i: [{
                            t: 3
                        }],
                        s: "Cancelled"
                    }
                }
            },
            professional_tips: {
                tip_1: {
                    t: 0,
                    b: {
                        t: 2,
                        i: [{
                            t: 3
                        }],
                        s: "Show kind gestures, they go a long way"
                    }
                },
                tip_2: {
                    t: 0,
                    b: {
                        t: 2,
                        i: [{
                            t: 3
                        }],
                        s: "Share a beverage with them"
                    }
                },
                tip_3: {
                    t: 0,
                    b: {
                        t: 2,
                        i: [{
                            t: 3
                        }],
                        s: "Learn their names and stories"
                    }
                }
            },
            get_help: {
                t: 0,
                b: {
                    t: 2,
                    i: [{
                        t: 3
                    }],
                    s: "Get Help"
                }
            },
            booking_details: {
                t: 0,
                b: {
                    t: 2,
                    i: [{
                        t: 3
                    }],
                    s: "Booking Details"
                }
            },
            show_more: {
                t: 0,
                b: {
                    t: 2,
                    i: [{
                        t: 3
                    }],
                    s: "Show more"
                }
            },
            payment_method: {
                t: 0,
                b: {
                    t: 2,
                    i: [{
                        t: 3
                    }],
                    s: "Payment Method"
                }
            },
            your_rating: {
                t: 0,
                b: {
                    t: 2,
                    i: [{
                        t: 3
                    }],
                    s: "Your Rating"
                }
            },
            you_rated_professional: {
                t: 0,
                b: {
                    t: 2,
                    i: [{
                        t: 3,
                        v: "You Rated "
                    }, {
                        t: 4,
                        k: "professional_name"
                    }]
                }
            },
            you_rated: {
                t: 0,
                b: {
                    t: 2,
                    i: [{
                        t: 3
                    }],
                    s: "You Rated"
                }
            },
            total: {
                t: 0,
                b: {
                    t: 2,
                    i: [{
                        t: 3
                    }],
                    s: "Total (Inc VAT)"
                }
            },
            edit_instructions: {
                t: 0,
                b: {
                    t: 2,
                    i: [{
                        t: 3
                    }],
                    s: "Edit My Instructions"
                }
            },
            upcoming_booking: {
                t: 0,
                b: {
                    t: 2,
                    i: [{
                        t: 3
                    }],
                    s: "Upcoming Booking"
                }
            },
            past_booking: {
                t: 0,
                b: {
                    t: 2,
                    i: [{
                        t: 3
                    }],
                    s: "Past Booking"
                }
            },
            price_details: {
                t: 0,
                b: {
                    t: 2,
                    i: [{
                        t: 3
                    }],
                    s: "Price Details"
                }
            },
            manage_booking: {
                t: 0,
                b: {
                    t: 2,
                    i: [{
                        t: 3
                    }],
                    s: "Manage This Booking"
                }
            },
            edit_this_booking: {
                t: 0,
                b: {
                    t: 2,
                    i: [{
                        t: 3
                    }],
                    s: "Edit This Booking"
                }
            },
            order_placed: {
                t: 0,
                b: {
                    t: 2,
                    i: [{
                        t: 3
                    }],
                    s: "Order Placed"
                }
            },
            rate_experience: {
                t: 0,
                b: {
                    t: 2,
                    i: [{
                        t: 3
                    }],
                    s: "Rate Your Experience"
                }
            },
            book_again: {
                t: 0,
                b: {
                    t: 2,
                    i: [{
                        t: 3
                    }],
                    s: "Book again"
                }
            },
            date_time: {
                t: 0,
                b: {
                    t: 2,
                    i: [{
                        t: 3
                    }],
                    s: "Date & Time"
                }
            },
            frequency: {
                t: 0,
                b: {
                    t: 2,
                    i: [{
                        t: 3
                    }],
                    s: "Frequency"
                }
            },
            reschedule_this_booking: {
                t: 0,
                b: {
                    t: 2,
                    i: [{
                        t: 3
                    }],
                    s: "Reschedule"
                }
            },
            cancel_this_booking: {
                t: 0,
                b: {
                    t: 2,
                    i: [{
                        t: 3
                    }],
                    s: "Cancel"
                }
            },
            cancelled_booking: {
                t: 0,
                b: {
                    t: 2,
                    i: [{
                        t: 3
                    }],
                    s: "Cancelled Booking"
                }
            },
            cancelled_tooltip: {
                t: 0,
                b: {
                    t: 2,
                    i: [{
                        t: 3
                    }],
                    s: "You will receive your refund immediately if the original payment was via Justlife credit and in up to 7 business days if it was via card payment."
                }
            },
            see_all: {
                t: 0,
                b: {
                    t: 2,
                    i: [{
                        t: 3
                    }],
                    s: "See all"
                }
            },
            professionals: {
                t: 0,
                b: {
                    t: 2,
                    i: [{
                        t: 3
                    }],
                    s: "Professionals"
                }
            },
            no_upcoming_info: {
                t: 0,
                b: {
                    t: 2,
                    i: [{
                        t: 3
                    }],
                    s: "You don't have any upcoming appointments"
                }
            },
            no_completed_info: {
                t: 0,
                b: {
                    t: 2,
                    i: [{
                        t: 3
                    }],
                    s: "You don't have any past appointments"
                }
            },
            details: {
                upcoming_title: {
                    t: 0,
                    b: {
                        t: 2,
                        i: [{
                            t: 3
                        }],
                        s: "Upcoming Appointment"
                    }
                },
                past_title: {
                    t: 0,
                    b: {
                        t: 2,
                        i: [{
                            t: 3
                        }],
                        s: "Past Appointment"
                    }
                }
            },
            cancel: {
                view_policy: {
                    t: 0,
                    b: {
                        t: 2,
                        i: [{
                            t: 3
                        }],
                        s: "View our policy"
                    }
                },
                other_placeholder: {
                    t: 0,
                    b: {
                        t: 2,
                        i: [{
                            t: 3
                        }],
                        s: "Please tell us why you want to cancel your booking"
                    }
                }
            },
            canceled: {
                browser_title: {
                    t: 0,
                    b: {
                        t: 2,
                        i: [{
                            t: 3
                        }],
                        s: "Appointment Cancelled"
                    }
                },
                title: {
                    t: 0,
                    b: {
                        t: 2,
                        i: [{
                            t: 3
                        }],
                        s: "Cancelled Booking"
                    }
                },
                cancelled_description_1: {
                    t: 0,
                    b: {
                        t: 2,
                        i: [{
                            t: 3
                        }],
                        s: "If you have any paid balance, your refund has been processed. However, refund may take up to "
                    }
                },
                cancelled_description_2: {
                    t: 0,
                    b: {
                        t: 2,
                        i: [{
                            t: 3
                        }],
                        s: "7 days "
                    }
                },
                cancelled_description_3: {
                    t: 0,
                    b: {
                        t: 2,
                        i: [{
                            t: 3
                        }],
                        s: "depending on your bank processes. If you have any questions about the refund, please follow up with your bank."
                    }
                },
                cancelled_refund_credit_description: {
                    t: 0,
                    b: {
                        t: 2,
                        i: [{
                            t: 3
                        }],
                        s: "Your booking has been canceled. The amount has been credited to your Justlife account."
                    }
                }
            }
        },
        update_account: {
            verify_your_number: {
                t: 0,
                b: {
                    t: 2,
                    i: [{
                        t: 3
                    }],
                    s: "Verify phone number"
                }
            },
            login_modal_title: {
                t: 0,
                b: {
                    t: 2,
                    i: [{
                        t: 3
                    }],
                    s: "Log in or sign up"
                }
            },
            your_mobile_number: {
                t: 0,
                b: {
                    t: 2,
                    i: [{
                        t: 3
                    }],
                    s: "Your phone number"
                }
            }
        },
        support: {
            title: {
                t: 0,
                b: {
                    t: 2,
                    i: [{
                        t: 3
                    }],
                    s: "We are always ready to help"
                }
            },
            content: {
                t: 0,
                b: {
                    t: 2,
                    i: [{
                        t: 3
                    }],
                    s: "You can reach us between 8AM - 7PM (Weekdays), 9AM - 6PM (Fridays)"
                }
            },
            day_week_text: {
                t: 0,
                b: {
                    t: 2,
                    i: [{
                        t: 3
                    }],
                    s: "7 days /assets-local/bd0188b5c32d91f9.binassets-local/assets-local/bd0188b5c32d91f9.binbd0188b5c32d91f9.binassets-local/assets-local/bd0188b5c32d91f9.binassets-local/assets-local/bd0188b5c32d91f9.binbd0188b5c32d91f9.binbd0188b5c32d91f9.bin week"
                }
            },
            time_text: {
                t: 0,
                b: {
                    t: 2,
                    i: [{
                        t: 3,
                        v: "You can reach us between "
                    }, {
                        t: 4,
                        k: "from"
                    }, {
                        t: 3,
                        v: " - "
                    }, {
                        t: 4,
                        k: "to"
                    }]
                }
            },
            buttons: {
                call_us: {
                    t: 0,
                    b: {
                        t: 2,
                        i: [{
                            t: 3
                        }],
                        s: "Call Us"
                    }
                },
                email_us: {
                    t: 0,
                    b: {
                        t: 2,
                        i: [{
                            t: 3
                        }],
                        s: "Email Us"
                    }
                },
                chat_with_us: {
                    t: 0,
                    b: {
                        t: 2,
                        i: [{
                            t: 3
                        }],
                        s: "Chat With Us"
                    }
                },
                faq: {
                    t: 0,
                    b: {
                        t: 2,
                        i: [{
                            t: 3
                        }],
                        s: "FAQ"
                    }
                },
                terms: {
                    t: 0,
                    b: {
                        t: 2,
                        i: [{
                            t: 3
                        }],
                        s: "Terms and Conditions"
                    }
                },
                privacy: {
                    t: 0,
                    b: {
                        t: 2,
                        i: [{
                            t: 3
                        }],
                        s: "Privacy Policy"
                    }
                },
                please_select: {
                    t: 0,
                    b: {
                        t: 2,
                        i: [{
                            t: 3
                        }],
                        s: "Please select issue"
                    }
                },
                issue_1: {
                    t: 0,
                    b: {
                        t: 2,
                        i: [{
                            t: 3
                        }],
                        s: "What are the services you offer"
                    }
                },
                issue_2: {
                    t: 0,
                    b: {
                        t: 2,
                        i: [{
                            t: 3
                        }],
                        s: "What are your prices"
                    }
                },
                issue_3: {
                    t: 0,
                    b: {
                        t: 2,
                        i: [{
                            t: 3
                        }],
                        s: "What are your ongoing promotions"
                    }
                },
                issue_4: {
                    t: 0,
                    b: {
                        t: 2,
                        i: [{
                            t: 3
                        }],
                        s: "How to use the referral code"
                    }
                },
                issue_5: {
                    t: 0,
                    b: {
                        t: 2,
                        i: [{
                            t: 3
                        }],
                        s: "Measures and response to COVID-19"
                    }
                },
                issue_6: {
                    t: 0,
                    b: {
                        t: 2,
                        i: [{
                            t: 3
                        }],
                        s: "What is your area of coverage"
                    }
                },
                issue_7: {
                    t: 0,
                    b: {
                        t: 2,
                        i: [{
                            t: 3
                        }],
                        s: "What are your timings"
                    }
                },
                issue_8: {
                    t: 0,
                    b: {
                        t: 2,
                        i: [{
                            t: 3
                        }],
                        s: "How much time is needed to complete the service"
                    }
                },
                issue_9: {
                    t: 0,
                    b: {
                        t: 2,
                        i: [{
                            t: 3
                        }],
                        s: "Other"
                    }
                },
                start_chat: {
                    t: 0,
                    b: {
                        t: 2,
                        i: [{
                            t: 3
                        }],
                        s: "Start Chat"
                    }
                }
            }
        },
        review: {
            one_to_three_stars_message: {
                t: 0,
                b: {
                    t: 2,
                    i: [{
                        t: 3
                    }],
                    s: "Sorry. What should have been better?"
                }
            },
            five_stars_message_exclusive: {
                t: 0,
                b: {
                    t: 2,
                    i: [{
                        t: 3,
                        v: "Great! You can now book "
                    }, {
                        t: 4,
                        k: "cleaner"
                    }, {
                        t: 3,
                        v: " again for your next home service."
                    }]
                }
            },
            five_stars_message_exclusive_cleaning: {
                t: 0,
                b: {
                    t: 2,
                    i: [{
                        t: 3,
                        v: "Great! You can now book "
                    }, {
                        t: 4,
                        k: "cleaner"
                    }, {
                        t: 3,
                        v: " again for your next cleaning."
                    }]
                }
            },
            five_stars_message_marketplace: {
                t: 0,
                b: {
                    t: 2,
                    i: [{
                        t: 3
                    }],
                    s: "Great! We look forward to serving you again."
                }
            },
            one_to_three_stars_description: {
                t: 0,
                b: {
                    t: 2,
                    i: [{
                        t: 3
                    }],
                    s: "Choose at least one area to improve upon"
                }
            },
            write_a_review: {
                t: 0,
                b: {
                    t: 2,
                    i: [{
                        t: 3
                    }],
                    s: "Write a review..."
                }
            },
            add_a_custom_tip: {
                t: 0,
                b: {
                    t: 2,
                    i: [{
                        t: 3
                    }],
                    s: "Add a custom tip"
                }
            },
            tip_amount: {
                label: {
                    t: 0,
                    b: {
                        t: 2,
                        i: [{
                            t: 3
                        }],
                        s: "Tip Amount"
                    }
                },
                placeholder: {
                    t: 0,
                    b: {
                        t: 2,
                        i: [{
                            t: 3
                        }],
                        s: "Add custom amount"
                    }
                },
                error: {
                    t: 0,
                    b: {
                        t: 2,
                        i: [{
                            t: 3
                        }],
                        s: "Please enter an amount"
                    }
                }
            },
            assigned_professional: {
                t: 0,
                b: {
                    t: 2,
                    i: [{
                        t: 3
                    }],
                    s: "Assigned Professional"
                }
            },
            verified_professional: {
                t: 0,
                b: {
                    t: 2,
                    i: [{
                        t: 3
                    }],
                    s: "Verified Professional"
                }
            },
            see_booking_detail: {
                t: 0,
                b: {
                    t: 2,
                    i: [{
                        t: 3
                    }],
                    s: "See booking detail"
                }
            },
            lowRatingPage: {
                title: {
                    t: 0,
                    b: {
                        t: 2,
                        i: [{
                            t: 3,
                            v: "Would you like to change your professional "
                        }, {
                            t: 4,
                            k: "name"
                        }, {
                            t: 3,
                            v: "?"
                        }]
                    }
                },
                title_2: {
                    t: 0,
                    b: {
                        t: 2,
                        i: [{
                            t: 3
                        }],
                        s: "Which professional do you prefer?"
                    }
                },
                description: {
                    t: 0,
                    b: {
                        t: 2,
                        i: [{
                            t: 3
                        }],
                        s: "We understand that you’re not fully satisfied with the service level as per your rating. Your comfort and satisfaction are our top priority, and we want to regain your trust."
                    }
                },
                select_action: {
                    t: 0,
                    b: {
                        t: 2,
                        i: [{
                            t: 3
                        }],
                        s: "Please choose the action you’d like to take."
                    }
                },
                change_button_text: {
                    t: 0,
                    b: {
                        t: 2,
                        i: [{
                            t: 3
                        }],
                        s: "Change my professional"
                    }
                },
                keep_button_text: {
                    t: 0,
                    b: {
                        t: 2,
                        i: [{
                            t: 3
                        }],
                        s: "Keep my professional"
                    }
                },
                confirm_button_text: {
                    t: 0,
                    b: {
                        t: 2,
                        i: [{
                            t: 3
                        }],
                        s: "Confirm"
                    }
                },
                complete_button_text: {
                    t: 0,
                    b: {
                        t: 2,
                        i: [{
                            t: 3
                        }],
                        s: "Complete"
                    }
                }
            }
        },
        pending_payment: {
            title: {
                t: 0,
                b: {
                    t: 2,
                    i: [{
                        t: 3
                    }],
                    s: "Pending Payment"
                }
            },
            booking_details: {
                t: 0,
                b: {
                    t: 2,
                    i: [{
                        t: 3
                    }],
                    s: "Booking Details"
                }
            },
            reference_code: {
                t: 0,
                b: {
                    t: 2,
                    i: [{
                        t: 3
                    }],
                    s: "Reference Code"
                }
            },
            service: {
                t: 0,
                b: {
                    t: 2,
                    i: [{
                        t: 3
                    }],
                    s: "Service"
                }
            },
            service_details: {
                t: 0,
                b: {
                    t: 2,
                    i: [{
                        t: 3
                    }],
                    s: "Service Details"
                }
            },
            booking_date: {
                t: 0,
                b: {
                    t: 2,
                    i: [{
                        t: 3
                    }],
                    s: "Booking Date"
                }
            },
            primary_button_text: {
                t: 0,
                b: {
                    t: 2,
                    i: [{
                        t: 3
                    }],
                    s: "Complete"
                }
            },
            pending_amount_label: {
                t: 0,
                b: {
                    t: 2,
                    i: [{
                        t: 3
                    }],
                    s: "Pending Amount"
                }
            },
            loading_modal_title: {
                t: 0,
                b: {
                    t: 2,
                    i: [{
                        t: 3
                    }],
                    s: "Please wait"
                }
            },
            loading_modal_content: {
                t: 0,
                b: {
                    t: 2,
                    i: [{
                        t: 3
                    }],
                    s: "Processing Please wait, you will be directed to the service page once the payment is received."
                }
            },
            failed_badge: {
                t: 0,
                b: {
                    t: 2,
                    i: [{
                        t: 3
                    }],
                    s: "Payment Failed"
                }
            },
            success_badge: {
                t: 0,
                b: {
                    t: 2,
                    i: [{
                        t: 3
                    }],
                    s: "Paid"
                }
            },
            try_again_button: {
                t: 0,
                b: {
                    t: 2,
                    i: [{
                        t: 3
                    }],
                    s: "PAY FAIL AMOUNT"
                }
            },
            get_help: {
                t: 0,
                b: {
                    t: 2,
                    i: [{
                        t: 3
                    }],
                    s: "Get help"
                }
            }
        },
        modals: {
            availabilityError: {
                modalTitle: {
                    t: 0,
                    b: {
                        t: 2,
                        i: [{
                            t: 3
                        }],
                        s: "Time Slot Expired"
                    }
                },
                contentTitle: {
                    t: 0,
                    b: {
                        t: 2,
                        i: [{
                            t: 3
                        }],
                        s: "Time Slot Expired"
                    }
                },
                content: {
                    t: 0,
                    b: {
                        t: 2,
                        i: [{
                            t: 3
                        }],
                        s: "Please select a new time/assets-local/bd0188b5c32d91f9.binassets-local/assets-local/bd0188b5c32d91f9.binbd0188b5c32d91f9.binassets-local/assets-local/bd0188b5c32d91f9.binassets-local/assets-local/bd0188b5c32d91f9.binbd0188b5c32d91f9.binbd0188b5c32d91f9.bindate slot to complete your booking."
                    }
                },
                buttonTitle: {
                    t: 0,
                    b: {
                        t: 2,
                        i: [{
                            t: 3
                        }],
                        s: "Select another slot"
                    }
                }
            },
            pending_payment: {
                title: {
                    t: 0,
                    b: {
                        t: 2,
                        i: [{
                            t: 3
                        }],
                        s: "Pending Amount"
                    }
                },
                description: {
                    t: 0,
                    b: {
                        t: 2,
                        i: [{
                            t: 3
                        }],
                        s: "There's a pending amount on a previous booking. Please proceed in paying the amount to book your favorite service!"
                    }
                },
                secondary_button: {
                    t: 0,
                    b: {
                        t: 2,
                        i: [{
                            t: 3
                        }],
                        s: "Go Home"
                    }
                },
                primary_button: {
                    t: 0,
                    b: {
                        t: 2,
                        i: [{
                            t: 3
                        }],
                        s: "PAY PENDING AMOUNT"
                    }
                }
            },
            receipts: {
                receipts: {
                    t: 0,
                    b: {
                        t: 2,
                        i: [{
                            t: 3
                        }],
                        s: "Receipts"
                    }
                },
                receipt_with_count: {
                    t: 0,
                    b: {
                        t: 2,
                        i: [{
                            t: 3,
                            v: "Receipt "
                        }, {
                            t: 4,
                            k: "count"
                        }]
                    }
                },
                show_receipt: {
                    t: 0,
                    b: {
                        t: 2,
                        i: [{
                            t: 3
                        }],
                        s: "Show Receipt"
                    }
                }
            },
            cookie: {
                okay: {
                    t: 0,
                    b: {
                        t: 2,
                        i: [{
                            t: 3
                        }],
                        s: "OKAY"
                    }
                },
                cookie_text: {
                    t: 0,
                    b: {
                        t: 2,
                        i: [{
                            t: 3
                        }],
                        s: "By visiting Justlife.com, you accept our"
                    }
                },
                and: {
                    t: 0,
                    b: {
                        t: 2,
                        i: [{
                            t: 3
                        }],
                        s: "and"
                    }
                },
                terms_of_use: {
                    t: 0,
                    b: {
                        t: 2,
                        i: [{
                            t: 3
                        }],
                        s: "Terms of Use"
                    }
                },
                privacy_policy: {
                    t: 0,
                    b: {
                        t: 2,
                        i: [{
                            t: 3
                        }],
                        s: "Privacy Policy"
                    }
                }
            },
            funnelLoadFailure: {
                title: {
                    t: 0,
                    b: {
                        t: 2,
                        i: [{
                            t: 3
                        }],
                        s: "Sorry!"
                    }
                },
                description: {
                    t: 0,
                    b: {
                        t: 2,
                        i: [{
                            t: 3
                        }],
                        s: "Something went wrong. Please try again."
                    }
                },
                try_again_button: {
                    t: 0,
                    b: {
                        t: 2,
                        i: [{
                            t: 3
                        }],
                        s: "Try Again"
                    }
                },
                go_home_button: {
                    t: 0,
                    b: {
                        t: 2,
                        i: [{
                            t: 3
                        }],
                        s: "Home"
                    }
                }
            },
            cancellation_policy: {
                reschedule: {
                    t: 0,
                    b: {
                        t: 2,
                        i: [{
                            t: 3
                        }],
                        s: "You are about to cancel your booking, but we would still love to serve you. If you are flexible with your date and time, why don’t you reschedule instead?"
                    }
                }
            },
            cancel: {
                que_1: {
                    t: 0,
                    b: {
                        t: 2,
                        i: [{
                            t: 3
                        }],
                        s: "Cancellation Reason"
                    }
                },
                reason_title: {
                    t: 0,
                    b: {
                        t: 2,
                        i: [{
                            t: 3
                        }],
                        s: "Why do you want to cancel?"
                    }
                },
                modal_question_1: {
                    t: 0,
                    b: {
                        t: 2,
                        i: [{
                            t: 3
                        }],
                        s: "Are you sure you want to cancel this booking only?"
                    }
                },
                modal_question_2: {
                    t: 0,
                    b: {
                        t: 2,
                        i: [{
                            t: 3
                        }],
                        s: "Are you sure you want to cancel all your future bookings?"
                    }
                },
                modal_question_3: {
                    t: 0,
                    b: {
                        t: 2,
                        i: [{
                            t: 3
                        }],
                        s: "Are you sure you want to cancel this booking?"
                    }
                },
                modal_title_1: {
                    t: 0,
                    b: {
                        t: 2,
                        i: [{
                            t: 3
                        }],
                        s: "Cancel this booking only"
                    }
                },
                modal_title_3: {
                    t: 0,
                    b: {
                        t: 2,
                        i: [{
                            t: 3
                        }],
                        s: "Cancel this booking"
                    }
                },
                complete_cancel: {
                    t: 0,
                    b: {
                        t: 2,
                        i: [{
                            t: 3
                        }],
                        s: "Complete Cancellation"
                    }
                }
            },
            location: {
                location_selection_title: {
                    t: 0,
                    b: {
                        t: 2,
                        i: [{
                            t: 3
                        }],
                        s: "Where would you like to receive your service?"
                    }
                },
                select: {
                    t: 0,
                    b: {
                        t: 2,
                        i: [{
                            t: 3
                        }],
                        s: "Select"
                    }
                },
                select_address: {
                    t: 0,
                    b: {
                        t: 2,
                        i: [{
                            t: 3
                        }],
                        s: "Select Address"
                    }
                },
                select_country: {
                    t: 0,
                    b: {
                        t: 2,
                        i: [{
                            t: 3
                        }],
                        s: "Select Country"
                    }
                },
                set_my_location: {
                    t: 0,
                    b: {
                        t: 2,
                        i: [{
                            t: 3
                        }],
                        s: "Set my location"
                    }
                },
                information: {
                    t: 0,
                    b: {
                        t: 2,
                        i: [{
                            t: 3
                        }],
                        s: "Information"
                    }
                },
                title: {
                    t: 0,
                    b: {
                        t: 2,
                        i: [{
                            t: 3
                        }],
                        s: "Your location"
                    }
                },
                pin_note: {
                    t: 0,
                    b: {
                        t: 2,
                        i: [{
                            t: 3
                        }],
                        s: "Move the map to set the exact position"
                    }
                },
                search_placeholder: {
                    t: 0,
                    b: {
                        t: 2,
                        i: [{
                            t: 3
                        }],
                        s: "Search for your building or area"
                    }
                },
                empty_state_primary_text: {
                    t: 0,
                    b: {
                        t: 2,
                        i: [{
                            t: 3,
                            v: "We couldn't find anything for '"
                        }, {
                            t: 4,
                            k: "query"
                        }, {
                            t: 3,
                            v: "'"
                        }]
                    }
                },
                empty_state_secondary_text: {
                    t: 0,
                    b: {
                        t: 2,
                        i: [{
                            t: 3
                        }],
                        s: "Please try a different search"
                    }
                },
                hi_there_home_cleaning: {
                    t: 0,
                    b: {
                        t: 2,
                        i: [{
                            t: 3
                        }],
                        s: "Hi There! Set your location and explore the best cleaners in your area"
                    }
                },
                hi_there: {
                    t: 0,
                    b: {
                        t: 2,
                        i: [{
                            t: 3
                        }],
                        s: "Hi There! Set your location and explore the best professionals in your area"
                    }
                },
                buttons: {
                    confirm: {
                        t: 0,
                        b: {
                            t: 2,
                            i: [{
                                t: 3
                            }],
                            s: "Confirm"
                        }
                    },
                    confirm_pin: {
                        t: 0,
                        b: {
                            t: 2,
                            i: [{
                                t: 3
                            }],
                            s: "Confirm Pin Location"
                        }
                    },
                    save_and_continue: {
                        t: 0,
                        b: {
                            t: 2,
                            i: [{
                                t: 3
                            }],
                            s: "Save & Continue"
                        }
                    }
                },
                address: {
                    label: {
                        t: 0,
                        b: {
                            t: 2,
                            i: [{
                                t: 3
                            }],
                            s: "Address Details"
                        }
                    },
                    error: {
                        t: 0,
                        b: {
                            t: 2,
                            i: [{
                                t: 3
                            }],
                            s: "Please enter your address."
                        }
                    },
                    street_name: {
                        t: 0,
                        b: {
                            t: 2,
                            i: [{
                                t: 3
                            }],
                            s: "Street Name"
                        }
                    },
                    street_name_error: {
                        t: 0,
                        b: {
                            t: 2,
                            i: [{
                                t: 3
                            }],
                            s: "Required field"
                        }
                    },
                    directions: {
                        t: 0,
                        b: {
                            t: 2,
                            i: [{
                                t: 3
                            }],
                            s: "Directions"
                        }
                    },
                    directions_error: {
                        t: 0,
                        b: {
                            t: 2,
                            i: [{
                                t: 3
                            }],
                            s: "Required field"
                        }
                    },
                    building_name: {
                        t: 0,
                        b: {
                            t: 2,
                            i: [{
                                t: 3
                            }],
                            s: "Building/assets-local/bd0188b5c32d91f9.binassets-local/assets-local/bd0188b5c32d91f9.binbd0188b5c32d91f9.binassets-local/assets-local/bd0188b5c32d91f9.binassets-local/assets-local/bd0188b5c32d91f9.binbd0188b5c32d91f9.binbd0188b5c32d91f9.binVilla Name"
                        }
                    },
                    building_name_error: {
                        t: 0,
                        b: {
                            t: 2,
                            i: [{
                                t: 3
                            }],
                            s: "Required field"
                        }
                    },
                    unitno: {
                        t: 0,
                        b: {
                            t: 2,
                            i: [{
                                t: 3
                            }],
                            s: "Unit no"
                        }
                    },
                    unitno_error: {
                        t: 0,
                        b: {
                            t: 2,
                            i: [{
                                t: 3
                            }],
                            s: "Required field"
                        }
                    },
                    optional: {
                        t: 0,
                        b: {
                            t: 2,
                            i: [{
                                t: 3
                            }],
                            s: "Optional"
                        }
                    }
                },
                name: {
                    label: {
                        t: 0,
                        b: {
                            t: 2,
                            i: [{
                                t: 3
                            }],
                            s: "Your name"
                        }
                    },
                    placeholder: {
                        t: 0,
                        b: {
                            t: 2,
                            i: [{
                                t: 3
                            }],
                            s: "Enter your full name"
                        }
                    },
                    error: {
                        t: 0,
                        b: {
                            t: 2,
                            i: [{
                                t: 3
                            }],
                            s: "Please enter your full name."
                        }
                    }
                },
                gender: {
                    placeholder: {
                        t: 0,
                        b: {
                            t: 2,
                            i: [{
                                t: 3
                            }],
                            s: "Gender"
                        }
                    },
                    error: {
                        t: 0,
                        b: {
                            t: 2,
                            i: [{
                                t: 3
                            }],
                            s: "Required field."
                        }
                    },
                    info: {
                        t: 0,
                        b: {
                            t: 2,
                            i: [{
                                t: 3
                            }],
                            s: "This info helps us refer you to relevant Justlife services"
                        }
                    },
                    options: {
                        ms: {
                            t: 0,
                            b: {
                                t: 2,
                                i: [{
                                    t: 3
                                }],
                                s: "Ms."
                            }
                        },
                        mr: {
                            t: 0,
                            b: {
                                t: 2,
                                i: [{
                                    t: 3
                                }],
                                s: "Mr."
                            }
                        },
                        rather_not: {
                            t: 0,
                            b: {
                                t: 2,
                                i: [{
                                    t: 3
                                }],
                                s: "Rather not say"
                            }
                        }
                    }
                },
                email: {
                    label: {
                        t: 0,
                        b: {
                            t: 2,
                            i: [{
                                t: 3
                            }],
                            s: "Email"
                        }
                    },
                    placeholder: {
                        t: 0,
                        b: {
                            t: 2,
                            i: [{
                                t: 3
                            }, {
                                t: 9
                            }, {
                                t: 3
                            }],
                            s: "e.g. name@example.com"
                        }
                    },
                    error: {
                        t: 0,
                        b: {
                            t: 2,
                            i: [{
                                t: 3
                            }],
                            s: "Please enter a valid e-mail."
                        }
                    }
                },
                couldnt_find: {
                    t: 0,
                    b: {
                        t: 2,
                        i: [{
                            t: 3
                        }],
                        s: "We couldn't find a location matched with"
                    }
                }
            },
            change_phone: {
                modal_title: {
                    t: 0,
                    b: {
                        t: 2,
                        i: [{
                            t: 3
                        }],
                        s: "Select a country"
                    }
                },
                input_placeholder: {
                    t: 0,
                    b: {
                        t: 2,
                        i: [{
                            t: 3
                        }],
                        s: "Search by country or code"
                    }
                }
            },
            subscription: {
                buttons: {
                    skip: {
                        t: 0,
                        b: {
                            t: 2,
                            i: [{
                                t: 3
                            }],
                            s: "Skip"
                        }
                    }
                }
            },
            share_professional: {
                description: {
                    t: 0,
                    b: {
                        t: 2,
                        i: [{
                            t: 3
                        }],
                        s: "Recommend this professional with your friends and family!"
                    }
                },
                tooltip_text: {
                    t: 0,
                    b: {
                        t: 2,
                        i: [{
                            t: 3
                        }],
                        s: "Here, you can share this professional with your friends!"
                    }
                },
                share_professional: {
                    t: 0,
                    b: {
                        t: 2,
                        i: [{
                            t: 3
                        }],
                        s: "Share Professional"
                    }
                },
                link_copied_notification: {
                    description: {
                        t: 0,
                        b: {
                            t: 2,
                            i: [{
                                t: 3
                            }],
                            s: "Recommend professional link is copied"
                        }
                    }
                },
                copy: {
                    t: 0,
                    b: {
                        t: 2,
                        i: [{
                            t: 3
                        }],
                        s: "Copy Link"
                    }
                },
                email: {
                    t: 0,
                    b: {
                        t: 2,
                        i: [{
                            t: 3
                        }],
                        s: "E-mail"
                    }
                },
                facebook: {
                    t: 0,
                    b: {
                        t: 2,
                        i: [{
                            t: 3
                        }],
                        s: "Facebook"
                    }
                },
                message: {
                    t: 0,
                    b: {
                        t: 2,
                        i: [{
                            t: 3
                        }],
                        s: "Message"
                    }
                },
                whatsapp: {
                    t: 0,
                    b: {
                        t: 2,
                        i: [{
                            t: 3
                        }],
                        s: "Whatsapp"
                    }
                }
            },
            payment_method: {
                title: {
                    t: 0,
                    b: {
                        t: 2,
                        i: [{
                            t: 3
                        }],
                        s: "Select Payment Method"
                    }
                },
                add_new_card: {
                    t: 0,
                    b: {
                        t: 2,
                        i: [{
                            t: 3
                        }],
                        s: "Add a new card"
                    }
                },
                confirm_button: {
                    t: 0,
                    b: {
                        t: 2,
                        i: [{
                            t: 3
                        }],
                        s: "Select"
                    }
                }
            },
            appointment_status: {
                title: {
                    t: 0,
                    b: {
                        t: 2,
                        i: [{
                            t: 3
                        }],
                        s: "Learn What Is Next"
                    }
                },
                confirmed_description: {
                    t: 0,
                    b: {
                        t: 2,
                        i: [{
                            t: 3
                        }],
                        s: "We will match you with a top-rated professional in your area"
                    }
                },
                single_professional_assigned_description: {
                    t: 0,
                    b: {
                        t: 2,
                        i: [{
                            t: 3,
                            v: "Your professional is "
                        }, {
                            t: 4,
                            k: "professional_name"
                        }]
                    }
                },
                multiple_professionals_assigned_description: {
                    t: 0,
                    b: {
                        t: 2,
                        i: [{
                            t: 3,
                            v: "Your professionals are "
                        }, {
                            t: 4,
                            k: "professional_name"
                        }]
                    }
                },
                on_the_way_description: {
                    t: 0,
                    b: {
                        t: 2,
                        i: [{
                            t: 3
                        }],
                        s: "Your professional will be with you soon!"
                    }
                },
                in_progress_description: {
                    t: 0,
                    b: {
                        t: 2,
                        i: [{
                            t: 3
                        }],
                        s: "Your session has started. Time to enjoy!"
                    }
                },
                completed_description: {
                    t: 0,
                    b: {
                        t: 2,
                        i: [{
                            t: 3
                        }],
                        s: "We hope you enjoyed your session. See you soon! 💙"
                    }
                }
            }
        }
    },
    booking: {
        funnel: {
            price: {
                t: 0,
                b: {
                    t: 2,
                    i: [{
                        t: 3
                    }],
                    s: "Price"
                }
            },
            vat: {
                t: 0,
                b: {
                    t: 2,
                    i: [{
                        t: 3
                    }],
                    s: "VAT"
                }
            },
            service_fee: {
                t: 0,
                b: {
                    t: 2,
                    i: [{
                        t: 3
                    }],
                    s: "Service Fee"
                }
            },
            subtotal: {
                t: 0,
                b: {
                    t: 2,
                    i: [{
                        t: 3
                    }],
                    s: "Subtotal"
                }
            },
            discounts: {
                t: 0,
                b: {
                    t: 2,
                    i: [{
                        t: 3
                    }],
                    s: "Discount"
                }
            },
            justlife_credit: {
                t: 0,
                b: {
                    t: 2,
                    i: [{
                        t: 3
                    }],
                    s: "Justlife Credit"
                }
            },
            next: {
                t: 0,
                b: {
                    t: 2,
                    i: [{
                        t: 3
                    }],
                    s: "Next"
                }
            },
            done: {
                t: 0,
                b: {
                    t: 2,
                    i: [{
                        t: 3
                    }],
                    s: "Done"
                }
            },
            complete: {
                t: 0,
                b: {
                    t: 2,
                    i: [{
                        t: 3
                    }],
                    s: "Complete"
                }
            },
            packages_from: {
                t: 0,
                b: {
                    t: 2,
                    i: [{
                        t: 3
                    }],
                    s: "From"
                }
            },
            frequency: {
                title: {
                    t: 0,
                    b: {
                        t: 2,
                        i: [{
                            t: 3
                        }],
                        s: "How often do you need your professional?"
                    }
                },
                opt_1_desc: {
                    t: 0,
                    b: {
                        t: 2,
                        i: [{
                            t: 3
                        }],
                        s: "Book a cleaning for one time only"
                    }
                },
                opt_2_desc: {
                    t: 0,
                    b: {
                        t: 2,
                        i: [{
                            t: 3
                        }],
                        s: "Book a recurring cleaning with the same professional every two-weeks"
                    }
                },
                opt_3_desc: {
                    t: 0,
                    b: {
                        t: 2,
                        i: [{
                            t: 3
                        }],
                        s: "Book a recurring cleaning with the same professional every week"
                    }
                }
            },
            instruction_title: {
                t: 0,
                b: {
                    t: 2,
                    i: [{
                        t: 3
                    }],
                    s: "Any instructions or special requirements?"
                }
            },
            instruction_title_remote: {
                t: 0,
                b: {
                    t: 2,
                    i: [{
                        t: 3
                    }],
                    s: "Any specific notes?"
                }
            },
            date_and_time: {
                options: {
                    option_1: {
                        title: {
                            t: 0,
                            b: {
                                t: 2,
                                i: [{
                                    t: 3
                                }],
                                s: "When would you like your service?"
                            }
                        },
                        laundry_title: {
                            t: 0,
                            b: {
                                t: 2,
                                i: [{
                                    t: 3
                                }],
                                s: "When would you like your pick-up and drop-off?"
                            }
                        },
                        remote_funnel_title: {
                            t: 0,
                            b: {
                                t: 2,
                                i: [{
                                    t: 3
                                }],
                                s: "When would you like your consultation?"
                            }
                        }
                    },
                    option_2: {
                        title: {
                            t: 0,
                            b: {
                                t: 2,
                                i: [{
                                    t: 3
                                }],
                                s: "What time would you like us to start?"
                            }
                        },
                        remote_funnel_title: {
                            t: 0,
                            b: {
                                t: 2,
                                i: [{
                                    t: 3
                                }],
                                s: "What time would you like us to contact you?"
                            }
                        }
                    }
                },
                which_cleaner: {
                    t: 0,
                    b: {
                        t: 2,
                        i: [{
                            t: 3
                        }],
                        s: "Which professional do you prefer?"
                    }
                },
                suggested: {
                    t: 0,
                    b: {
                        t: 2,
                        i: [{
                            t: 3
                        }],
                        s: "SUGGESTED"
                    }
                },
                professional_unavailable_description: {
                    t: 0,
                    b: {
                        t: 2,
                        i: [{
                            t: 4,
                            k: "name"
                        }, {
                            t: 3,
                            v: " does not serve in this location. We'll make sure we assign the best rated professional available in your location, for the session."
                        }]
                    }
                },
                professional_unavailable_title: {
                    t: 0,
                    b: {
                        t: 2,
                        i: [{
                            t: 4,
                            k: "name"
                        }, {
                            t: 3,
                            v: " is unavailable!"
                        }]
                    }
                },
                select_another_professional: {
                    t: 0,
                    b: {
                        t: 2,
                        i: [{
                            t: 3
                        }],
                        s: "Select Another Professional"
                    }
                },
                reschedule_warning: {
                    t: 0,
                    b: {
                        t: 2,
                        i: [{
                            t: 3
                        }],
                        s: "Please note that your regular professional might not be available"
                    }
                },
                which_days_prefer: {
                    t: 0,
                    b: {
                        t: 2,
                        i: [{
                            t: 3
                        }],
                        s: "Which days do you prefer?"
                    }
                },
                choose: {
                    t: 0,
                    b: {
                        t: 2,
                        i: [{
                            t: 3
                        }],
                        s: "Choose"
                    }
                },
                days: {
                    t: 0,
                    b: {
                        t: 2,
                        i: [{
                            t: 3
                        }],
                        s: "days"
                    }
                },
                day: {
                    t: 0,
                    b: {
                        t: 2,
                        i: [{
                            t: 3
                        }],
                        s: "day"
                    }
                },
                no_female: {
                    t: 0,
                    b: {
                        t: 2,
                        i: [{
                            t: 3
                        }],
                        s: "We only serve family houses, where there is a female over the age of 18 available"
                    }
                },
                top_rated: {
                    t: 0,
                    b: {
                        t: 2,
                        i: [{
                            t: 3
                        }],
                        s: "Top-rated professionals in your area"
                    }
                }
            },
            addresses: {
                delete: {
                    t: 0,
                    b: {
                        t: 2,
                        i: [{
                            t: 3
                        }],
                        s: "Delete"
                    }
                },
                edit: {
                    t: 0,
                    b: {
                        t: 2,
                        i: [{
                            t: 3
                        }],
                        s: "Edit"
                    }
                },
                add: {
                    t: 0,
                    b: {
                        t: 2,
                        i: [{
                            t: 3
                        }],
                        s: "Add"
                    }
                }
            },
            contact_details: {
                add_new: {
                    t: 0,
                    b: {
                        t: 2,
                        i: [{
                            t: 3
                        }],
                        s: "Add new"
                    }
                },
                add_new_address: {
                    t: 0,
                    b: {
                        t: 2,
                        i: [{
                            t: 3
                        }],
                        s: "Add new address"
                    }
                },
                your_saved_addresses: {
                    t: 0,
                    b: {
                        t: 2,
                        i: [{
                            t: 3
                        }],
                        s: "Your saved addresses"
                    }
                }
            },
            checkout: {
                title: {
                    t: 0,
                    b: {
                        t: 2,
                        i: [{
                            t: 3
                        }],
                        s: "Checkout"
                    }
                },
                payment_method: {
                    t: 0,
                    b: {
                        t: 2,
                        i: [{
                            t: 3
                        }],
                        s: "Payment Method"
                    }
                },
                credit_debit_card: {
                    t: 0,
                    b: {
                        t: 2,
                        i: [{
                            t: 3
                        }],
                        s: "Credit /assets-local/bd0188b5c32d91f9.binassets-local/assets-local/bd0188b5c32d91f9.binbd0188b5c32d91f9.binassets-local/assets-local/bd0188b5c32d91f9.binassets-local/assets-local/bd0188b5c32d91f9.binbd0188b5c32d91f9.binbd0188b5c32d91f9.bin Debit Card"
                    }
                },
                change: {
                    t: 0,
                    b: {
                        t: 2,
                        i: [{
                            t: 3
                        }],
                        s: "Change"
                    }
                },
                verification_charge_warning: {
                    t: 0,
                    b: {
                        t: 2,
                        i: [{
                            t: 4,
                            k: "charge_amount"
                        }, {
                            t: 3,
                            v: " will be charged to verify your card. The amount will be refunded immediately."
                        }]
                    }
                },
                charge_after_session: {
                    t: 0,
                    b: {
                        t: 2,
                        i: [{
                            t: 3
                        }],
                        s: "You will be charged once the session is completed."
                    }
                },
                add_voucher_or_credit: {
                    t: 0,
                    b: {
                        t: 2,
                        i: [{
                            t: 3
                        }],
                        s: "Add a voucher code or Justlife credit"
                    }
                },
                add_voucher: {
                    t: 0,
                    b: {
                        t: 2,
                        i: [{
                            t: 3
                        }],
                        s: "Add Voucher Code"
                    }
                },
                add: {
                    t: 0,
                    b: {
                        t: 2,
                        i: [{
                            t: 3
                        }],
                        s: "Add"
                    }
                },
                details: {
                    t: 0,
                    b: {
                        t: 2,
                        i: [{
                            t: 3
                        }],
                        s: "Details"
                    }
                },
                careem_pay: {
                    t: 0,
                    b: {
                        t: 2,
                        i: [{
                            t: 3
                        }],
                        s: "Pay with Careem Pay"
                    }
                },
                any_card_on_careem_pay: {
                    t: 0,
                    b: {
                        t: 2,
                        i: [{
                            t: 3
                        }],
                        s: "Pay with any card that is linked to your Careem Pay"
                    }
                },
                expiry_date_error: {
                    t: 0,
                    b: {
                        t: 2,
                        i: [{
                            t: 3
                        }],
                        s: "Invalid Expiry Date"
                    }
                },
                options: {
                    option_1: {
                        opt_1: {
                            t: 0,
                            b: {
                                t: 2,
                                i: [{
                                    t: 3
                                }],
                                s: "Voucher Code"
                            }
                        },
                        btn_1: {
                            t: 0,
                            b: {
                                t: 2,
                                i: [{
                                    t: 3
                                }],
                                s: "Apply"
                            }
                        }
                    }
                },
                card_options: {
                    card_number: {
                        t: 0,
                        b: {
                            t: 2,
                            i: [{
                                t: 3
                            }],
                            s: "Card Number"
                        }
                    },
                    expiry_date: {
                        t: 0,
                        b: {
                            t: 2,
                            i: [{
                                t: 3
                            }],
                            s: "Exp. Date (MM/assets-local/bd0188b5c32d91f9.binassets-local/assets-local/bd0188b5c32d91f9.binbd0188b5c32d91f9.binassets-local/assets-local/bd0188b5c32d91f9.binassets-local/assets-local/bd0188b5c32d91f9.binbd0188b5c32d91f9.binbd0188b5c32d91f9.binYY)"
                        }
                    },
                    expiry_date_placeholder: {
                        t: 0,
                        b: {
                            t: 2,
                            i: [{
                                t: 3
                            }],
                            s: "MM/assets-local/bd0188b5c32d91f9.binassets-local/assets-local/bd0188b5c32d91f9.binbd0188b5c32d91f9.binassets-local/assets-local/bd0188b5c32d91f9.binassets-local/assets-local/bd0188b5c32d91f9.binbd0188b5c32d91f9.binbd0188b5c32d91f9.binYY"
                        }
                    },
                    security_code: {
                        t: 0,
                        b: {
                            t: 2,
                            i: [{
                                t: 3
                            }],
                            s: "CVV Number"
                        }
                    },
                    cvv: {
                        t: 0,
                        b: {
                            t: 2,
                            i: [{
                                t: 3
                            }],
                            s: "CVV Number"
                        }
                    },
                    choose_a_credit_card: {
                        t: 0,
                        b: {
                            t: 2,
                            i: [{
                                t: 3
                            }],
                            s: "Choose a Credit Card"
                        }
                    }
                },
                credit_details: {
                    t: 0,
                    b: {
                        t: 2,
                        i: [{
                            t: 3
                        }],
                        s: "Your Available Credits"
                    }
                },
                expiry_date: {
                    t: 0,
                    b: {
                        t: 2,
                        i: [{
                            t: 3
                        }],
                        s: "Expiry Date"
                    }
                },
                apple_pay: {
                    t: 0,
                    b: {
                        t: 2,
                        i: [{
                            t: 3
                        }],
                        s: "Apple Pay"
                    }
                },
                google_pay: {
                    t: 0,
                    b: {
                        t: 2,
                        i: [{
                            t: 3
                        }],
                        s: "Google Pay"
                    }
                },
                insurance_success_text: {
                    t: 0,
                    b: {
                        t: 2,
                        i: [{
                            t: 3,
                            v: "Pay online to get "
                        }, {
                            t: 4,
                            k: "amount"
                        }, {
                            t: 3,
                            v: " insurance"
                        }]
                    }
                },
                justlife_guarantee: {
                    t: 0,
                    b: {
                        t: 2,
                        i: [{
                            t: 3
                        }],
                        s: "Justlife Guarantee"
                    }
                },
                learn_more: {
                    t: 0,
                    b: {
                        t: 2,
                        i: [{
                            t: 3
                        }],
                        s: "Learn more"
                    }
                },
                insurance_text_1: {
                    t: 0,
                    b: {
                        t: 2,
                        i: [{
                            t: 3
                        }],
                        s: "At Justlife, your trust is one of our highest priorities. We have a commitment to delivering the best customer experience, every single time."
                    }
                },
                insurance_text_2: {
                    t: 0,
                    b: {
                        t: 2,
                        i: [{
                            t: 3,
                            v: "That's why we are introducing the Justlife Insurance Protection Program. This program protects Justlife users against any damages caused during the service booked on Justlife, up to a maximum of "
                        }, {
                            t: 4,
                            k: "amount"
                        }, {
                            t: 3,
                            v: "."
                        }]
                    }
                },
                insurance_text_3: {
                    t: 0,
                    b: {
                        t: 2,
                        i: [{
                            t: 3
                        }],
                        s: "In the rare event of any damages during the service, Justlife's got your back. The insurance coverage is only applicable for online payments."
                    }
                },
                pay_with_cash: {
                    t: 0,
                    b: {
                        t: 2,
                        i: [{
                            t: 3
                        }],
                        s: "Pay with Cash"
                    }
                },
                cash_option: {
                    t: 0,
                    b: {
                        t: 2,
                        i: [{
                            t: 3
                        }],
                        s: "Cash"
                    }
                },
                add_new_card: {
                    t: 0,
                    b: {
                        t: 2,
                        i: [{
                            t: 3
                        }],
                        s: "Add new card"
                    }
                },
                add_voucher_code: {
                    t: 0,
                    b: {
                        t: 2,
                        i: [{
                            t: 3
                        }],
                        s: "Add voucher code"
                    }
                }
            },
            address_step: {
                service_not_available: {
                    t: 0,
                    b: {
                        t: 2,
                        i: [{
                            t: 3
                        }],
                        s: "Service not available in this area"
                    }
                }
            },
            add_ons_step: {
                people_added: {
                    t: 0,
                    b: {
                        t: 2,
                        i: [{
                            t: 3
                        }],
                        s: "People also added"
                    }
                }
            },
            summary: {
                title: {
                    t: 0,
                    b: {
                        t: 2,
                        i: [{
                            t: 3
                        }],
                        s: "Booking Summary"
                    }
                },
                total: {
                    t: 0,
                    b: {
                        t: 2,
                        i: [{
                            t: 3
                        }],
                        s: "Total"
                    }
                },
                failed: {
                    title: {
                        t: 0,
                        b: {
                            t: 2,
                            i: [{
                                t: 3
                            }],
                            s: "Your order could not be placed"
                        }
                    },
                    description: {
                        t: 0,
                        b: {
                            t: 2,
                            i: [{
                                t: 3
                            }],
                            s: "Oh no! Something went wrong. We weren't able to validate your payment. Please try again!"
                        }
                    },
                    book_again: {
                        t: 0,
                        b: {
                            t: 2,
                            i: [{
                                t: 3
                            }],
                            s: "Book Again"
                        }
                    }
                }
            }
        },
        details: {
            schedule: {
                t: 0,
                b: {
                    t: 2,
                    i: [{
                        t: 3
                    }],
                    s: "Schedule"
                }
            },
            ref_code: {
                t: 0,
                b: {
                    t: 2,
                    i: [{
                        t: 3
                    }],
                    s: "Reference Code"
                }
            },
            address: {
                t: 0,
                b: {
                    t: 2,
                    i: [{
                        t: 3
                    }],
                    s: "Address"
                }
            },
            details: {
                t: 0,
                b: {
                    t: 2,
                    i: [{
                        t: 3
                    }],
                    s: "Details"
                }
            },
            status: {
                t: 0,
                b: {
                    t: 2,
                    i: [{
                        t: 3
                    }],
                    s: "Status"
                }
            }
        },
        faq_title: {
            t: 0,
            b: {
                t: 2,
                i: [{
                    t: 3
                }],
                s: "Frequently Asked Questions"
            }
        }
    },
    common: {
        location_placeholder: {
            t: 0,
            b: {
                t: 2,
                i: [{
                    t: 3
                }],
                s: "Search for area, street name, landmark..."
            }
        },
        more: {
            t: 0,
            b: {
                t: 2,
                i: [{
                    t: 3
                }],
                s: "more"
            }
        },
        new: {
            t: 0,
            b: {
                t: 2,
                i: [{
                    t: 3
                }],
                s: "New"
            }
        },
        success: {
            t: 0,
            b: {
                t: 2,
                i: [{
                    t: 3
                }],
                s: "Success"
            }
        },
        error: {
            t: 0,
            b: {
                t: 2,
                i: [{
                    t: 3
                }],
                s: "Error"
            }
        },
        oops: {
            t: 0,
            b: {
                t: 2,
                i: [{
                    t: 3
                }],
                s: "Oops!"
            }
        },
        myaccount: {
            t: 0,
            b: {
                t: 2,
                i: [{
                    t: 3
                }],
                s: "My Account"
            }
        },
        mydetails: {
            t: 0,
            b: {
                t: 2,
                i: [{
                    t: 3
                }],
                s: "My Details"
            }
        },
        appointments: {
            t: 0,
            b: {
                t: 2,
                i: [{
                    t: 3
                }],
                s: "Appointments"
            }
        },
        bookings: {
            t: 0,
            b: {
                t: 2,
                i: [{
                    t: 3
                }],
                s: "Bookings"
            }
        },
        weekly_bookings: {
            t: 0,
            b: {
                t: 2,
                i: [{
                    t: 3
                }],
                s: "Weekly Bookings"
            }
        },
        appointment: {
            t: 0,
            b: {
                t: 2,
                i: [{
                    t: 3
                }],
                s: "Appointment"
            }
        },
        cleaner_detail: {
            t: 0,
            b: {
                t: 2,
                i: [{
                    t: 3
                }],
                s: "Professional Details"
            }
        },
        vaccinated: {
            t: 0,
            b: {
                t: 2,
                i: [{
                    t: 3
                }],
                s: "Vaccinated"
            }
        },
        cleaner_vaccination_info: {
            t: 0,
            b: {
                t: 2,
                i: [{
                    t: 4,
                    k: "name"
                }, {
                    t: 3,
                    v: " got dose "
                }, {
                    t: 4,
                    k: "dose"
                }, {
                    t: 3,
                    v: " on "
                }, {
                    t: 4,
                    k: "date"
                }]
            }
        },
        see_vaccination_certificate: {
            t: 0,
            b: {
                t: 2,
                i: [{
                    t: 3
                }],
                s: "See vaccination certificate"
            }
        },
        hired: {
            t: 0,
            b: {
                t: 2,
                i: [{
                    t: 3
                }],
                s: "Hired"
            }
        },
        reviews: {
            t: 0,
            b: {
                t: 2,
                i: [{
                    t: 3
                }],
                s: "Reviews"
            }
        },
        rating_error_title: {
            t: 0,
            b: {
                t: 2,
                i: [{
                    t: 3
                }],
                s: "Rate your appointment"
            }
        },
        rating_error_description: {
            t: 0,
            b: {
                t: 2,
                i: [{
                    t: 3
                }],
                s: "Choose one area to improve to complete your rating"
            }
        },
        avg_rating: {
            t: 0,
            b: {
                t: 2,
                i: [{
                    t: 3
                }],
                s: "Avg. Rating"
            }
        },
        excellent: {
            t: 0,
            b: {
                t: 2,
                i: [{
                    t: 3,
                    v: "Excellent ("
                }, {
                    t: 4,
                    k: "totalCount"
                }, {
                    t: 3,
                    v: ")"
                }]
            }
        },
        good: {
            t: 0,
            b: {
                t: 2,
                i: [{
                    t: 3,
                    v: "Good ("
                }, {
                    t: 4,
                    k: "totalCount"
                }, {
                    t: 3,
                    v: ")"
                }]
            }
        },
        average: {
            t: 0,
            b: {
                t: 2,
                i: [{
                    t: 3,
                    v: "Average ("
                }, {
                    t: 4,
                    k: "totalCount"
                }, {
                    t: 3,
                    v: ")"
                }]
            }
        },
        bad: {
            t: 0,
            b: {
                t: 2,
                i: [{
                    t: 3,
                    v: "Bad ("
                }, {
                    t: 4,
                    k: "totalCount"
                }, {
                    t: 3,
                    v: ")"
                }]
            }
        },
        terrible: {
            t: 0,
            b: {
                t: 2,
                i: [{
                    t: 3,
                    v: "Terrible ("
                }, {
                    t: 4,
                    k: "totalCount"
                }, {
                    t: 3,
                    v: ")"
                }]
            }
        },
        load_more_reviews: {
            t: 0,
            b: {
                t: 2,
                i: [{
                    t: 3
                }],
                s: "Load more reviews"
            }
        },
        load_more: {
            t: 0,
            b: {
                t: 2,
                i: [{
                    t: 3
                }],
                s: "Load more"
            }
        },
        settings: {
            t: 0,
            b: {
                t: 2,
                i: [{
                    t: 3
                }],
                s: "Settings"
            }
        },
        addresses: {
            t: 0,
            b: {
                t: 2,
                i: [{
                    t: 3
                }],
                s: "Addresses"
            }
        },
        personal_details: {
            t: 0,
            b: {
                t: 2,
                i: [{
                    t: 3
                }],
                s: "Personal Details"
            }
        },
        creditcards: {
            t: 0,
            b: {
                t: 2,
                i: [{
                    t: 3
                }],
                s: "Credit Cards"
            }
        },
        support: {
            t: 0,
            b: {
                t: 2,
                i: [{
                    t: 3
                }],
                s: "Support"
            }
        },
        help: {
            t: 0,
            b: {
                t: 2,
                i: [{
                    t: 3
                }],
                s: "Help"
            }
        },
        facebook: {
            t: 0,
            b: {
                t: 2,
                i: [{
                    t: 3
                }],
                s: "Facebook"
            }
        },
        send: {
            t: 0,
            b: {
                t: 2,
                i: [{
                    t: 3
                }],
                s: "Send"
            }
        },
        signup_or_login: {
            t: 0,
            b: {
                t: 2,
                i: [{
                    t: 3
                }],
                s: "Sign up or Log in"
            }
        },
        login: {
            t: 0,
            b: {
                t: 2,
                i: [{
                    t: 3
                }],
                s: "Log in"
            }
        },
        cancellation_policy: {
            t: 0,
            b: {
                t: 2,
                i: [{
                    t: 3
                }],
                s: "Cancellation Policy"
            }
        },
        logintoyouracc: {
            t: 0,
            b: {
                t: 2,
                i: [{
                    t: 3
                }],
                s: "Login to your account"
            }
        },
        enter_phone_number: {
            t: 0,
            b: {
                t: 2,
                i: [{
                    t: 3
                }],
                s: "Enter your phone number"
            }
        },
        phone_not_valid: {
            t: 0,
            b: {
                t: 2,
                i: [{
                    t: 3
                }],
                s: "Please enter a valid phone number"
            }
        },
        code_that_was_sent: {
            t: 0,
            b: {
                t: 2,
                i: [{
                    t: 3
                }],
                s: "Please enter the code that was sent to:"
            }
        },
        one_time_verification_code: {
            t: 0,
            b: {
                t: 2,
                i: [{
                    t: 3
                }],
                s: "We will send you a one-time verification code"
            }
        },
        resend_code_in: {
            t: 0,
            b: {
                t: 2,
                i: [{
                    t: 3
                }],
                s: "Resend code in"
            }
        },
        resend_code: {
            t: 0,
            b: {
                t: 2,
                i: [{
                    t: 3
                }],
                s: "Resend Code"
            }
        },
        resend_sms: {
            t: 0,
            b: {
                t: 2,
                i: [{
                    t: 3
                }],
                s: "Resend SMS"
            }
        },
        resend_whatsapp: {
            t: 0,
            b: {
                t: 2,
                i: [{
                    t: 3
                }],
                s: "Send code via WhatsApp"
            }
        },
        verify_number: {
            t: 0,
            b: {
                t: 2,
                i: [{
                    t: 3
                }],
                s: "Verify Number"
            }
        },
        whatsapp: {
            t: 0,
            b: {
                t: 2,
                i: [{
                    t: 3
                }],
                s: "Whatsapp"
            }
        },
        sms: {
            t: 0,
            b: {
                t: 2,
                i: [{
                    t: 3
                }],
                s: "SMS"
            }
        },
        resend_whatsapp_confirmation_text_top: {
            t: 0,
            b: {
                t: 2,
                i: [{
                    t: 3
                }],
                s: "A WhatsApp message will be sent to"
            }
        },
        resend_whatsapp_confirmation_text_center: {
            t: 0,
            b: {
                t: 2,
                i: [{
                    t: 4,
                    k: "phone_number"
                }, {
                    t: 3,
                    v: "."
                }]
            }
        },
        resend_whatsapp_confirmation_text_bottom: {
            t: 0,
            b: {
                t: 2,
                i: [{
                    t: 3
                }],
                s: "Are you sure?"
            }
        },
        didnt_receive_code: {
            t: 0,
            b: {
                t: 2,
                i: [{
                    t: 3
                }],
                s: "Did not receive a code? Resend via:"
            }
        },
        resend_warning: {
            t: 0,
            b: {
                t: 2,
                i: [{
                    t: 3
                }],
                s: "Your OTP code has expired because you did not get an action for a while. Please hit 'RESEND CODE' button to get new one."
            }
        },
        incorrect_otp_title: {
            t: 0,
            b: {
                t: 2,
                i: [{
                    t: 3
                }],
                s: "Oops! Incorrect code!"
            }
        },
        incorrect_otp_message: {
            t: 0,
            b: {
                t: 2,
                i: [{
                    t: 3
                }],
                s: "You've entered an incorrect code. Please try again!"
            }
        },
        check: {
            t: 0,
            b: {
                t: 2,
                i: [{
                    t: 3
                }],
                s: "Check"
            }
        },
        logout: {
            t: 0,
            b: {
                t: 2,
                i: [{
                    t: 3
                }],
                s: "Log out"
            }
        },
        ae: {
            t: 0,
            b: {
                t: 2,
                i: [{
                    t: 3
                }],
                s: "United Arab Emirates"
            }
        },
        qa: {
            t: 0,
            b: {
                t: 2,
                i: [{
                    t: 3
                }],
                s: "Qatar"
            }
        },
        bh: {
            t: 0,
            b: {
                t: 2,
                i: [{
                    t: 3
                }],
                s: "Bahrain"
            }
        },
        om: {
            t: 0,
            b: {
                t: 2,
                i: [{
                    t: 3
                }],
                s: "Oman"
            }
        },
        kw: {
            t: 0,
            b: {
                t: 2,
                i: [{
                    t: 3
                }],
                s: "Kuwait"
            }
        },
        back: {
            t: 0,
            b: {
                t: 2,
                i: [{
                    t: 3
                }],
                s: "Back"
            }
        },
        close: {
            t: 0,
            b: {
                t: 2,
                i: [{
                    t: 3
                }],
                s: "Close"
            }
        },
        booknow: {
            t: 0,
            b: {
                t: 2,
                i: [{
                    t: 3
                }],
                s: "Book Now"
            }
        },
        see_all: {
            t: 0,
            b: {
                t: 2,
                i: [{
                    t: 3
                }],
                s: "See all"
            }
        },
        visa: {
            t: 0,
            b: {
                t: 2,
                i: [{
                    t: 3
                }],
                s: "Visa"
            }
        },
        master: {
            t: 0,
            b: {
                t: 2,
                i: [{
                    t: 3
                }],
                s: "Master Card"
            }
        },
        home: {
            t: 0,
            b: {
                t: 2,
                i: [{
                    t: 3
                }],
                s: "Home"
            }
        },
        submit: {
            t: 0,
            b: {
                t: 2,
                i: [{
                    t: 3
                }],
                s: "Submit"
            }
        },
        save: {
            t: 0,
            b: {
                t: 2,
                i: [{
                    t: 3
                }],
                s: "Save"
            }
        },
        sun: {
            t: 0,
            b: {
                t: 2,
                i: [{
                    t: 3
                }],
                s: "Sun"
            }
        },
        mon: {
            t: 0,
            b: {
                t: 2,
                i: [{
                    t: 3
                }],
                s: "Mon"
            }
        },
        tue: {
            t: 0,
            b: {
                t: 2,
                i: [{
                    t: 3
                }],
                s: "Tue"
            }
        },
        wed: {
            t: 0,
            b: {
                t: 2,
                i: [{
                    t: 3
                }],
                s: "Wed"
            }
        },
        thu: {
            t: 0,
            b: {
                t: 2,
                i: [{
                    t: 3
                }],
                s: "Thu"
            }
        },
        fri: {
            t: 0,
            b: {
                t: 2,
                i: [{
                    t: 3
                }],
                s: "Fri"
            }
        },
        sat: {
            t: 0,
            b: {
                t: 2,
                i: [{
                    t: 3
                }],
                s: "Sat"
            }
        },
        cleaner: {
            t: 0,
            b: {
                t: 2,
                i: [{
                    t: 3
                }],
                s: "professional"
            }
        },
        cleaners: {
            t: 0,
            b: {
                t: 2,
                i: [{
                    t: 3
                }],
                s: "cleaners"
            }
        },
        yes: {
            t: 0,
            b: {
                t: 2,
                i: [{
                    t: 3
                }],
                s: "Yes"
            }
        },
        no: {
            t: 0,
            b: {
                t: 2,
                i: [{
                    t: 3
                }],
                s: "No"
            }
        },
        english: {
            t: 0,
            b: {
                t: 2,
                i: [{
                    t: 3
                }],
                s: "English"
            }
        },
        arabic: {
            t: 0,
            b: {
                t: 2,
                i: [{
                    t: 3
                }],
                s: "العربية"
            }
        },
        continue: {
            t: 0,
            b: {
                t: 2,
                i: [{
                    t: 3
                }],
                s: "Continue"
            }
        },
        welcome_back: {
            t: 0,
            b: {
                t: 2,
                i: [{
                    t: 3
                }],
                s: "Welcome back"
            }
        },
        not_rated: {
            t: 0,
            b: {
                t: 2,
                i: [{
                    t: 3
                }],
                s: "Not Rated"
            }
        },
        you_rated: {
            t: 0,
            b: {
                t: 2,
                i: [{
                    t: 3
                }],
                s: "You rated:"
            }
        },
        served_you_on: {
            t: 0,
            b: {
                t: 2,
                i: [{
                    t: 3,
                    v: "Served you on "
                }, {
                    t: 4,
                    k: "date"
                }]
            }
        },
        no_slots_available: {
            t: 0,
            b: {
                t: 2,
                i: [{
                    t: 3
                }],
                s: "No Slots Available"
            }
        },
        assign_the_best_cleaner: {
            t: 0,
            b: {
                t: 2,
                i: [{
                    t: 3
                }],
                s: "We'll assign the best professional"
            }
        },
        auto_assign: {
            t: 0,
            b: {
                t: 2,
                i: [{
                    t: 3
                }],
                s: "Auto assign"
            }
        },
        jm_verified: {
            t: 0,
            b: {
                t: 2,
                i: [{
                    t: 3
                }],
                s: "JL Verified"
            }
        },
        weekly: {
            t: 0,
            b: {
                t: 2,
                i: [{
                    t: 3
                }],
                s: "Weekly"
            }
        },
        package: {
            t: 0,
            b: {
                t: 2,
                i: [{
                    t: 3
                }],
                s: "Package"
            }
        },
        in: {
            t: 0,
            b: {
                t: 2,
                i: [{
                    t: 3
                }],
                s: "IN"
            }
        },
        off: {
            t: 0,
            b: {
                t: 2,
                i: [{
                    t: 3
                }],
                s: "Off"
            }
        },
        ok: {
            t: 0,
            b: {
                t: 2,
                i: [{
                    t: 3
                }],
                s: "OK"
            }
        },
        banner: {
            triedjustlifeappyet: {
                t: 0,
                b: {
                    t: 2,
                    i: [{
                        t: 3
                    }],
                    s: "25% Off Home Cleaning"
                }
            },
            downloadapp: {
                t: 0,
                b: {
                    t: 2,
                    i: [{
                        t: 3
                    }],
                    s: "Hygienic and safe cleaning for your home"
                }
            },
            usecode: {
                t: 0,
                b: {
                    t: 2,
                    i: [{
                        t: 3
                    }],
                    s: "USE CODE: WB25"
                }
            },
            download: {
                t: 0,
                b: {
                    t: 2,
                    i: [{
                        t: 3
                    }],
                    s: "Download & Get 25% Off"
                }
            },
            headerTextDesktop: {
                t: 0,
                b: {
                    t: 2,
                    i: [{
                        t: 3
                    }],
                    s: "25% Off Home Cleaning"
                }
            },
            descriptionTextDesktop: {
                t: 0,
                b: {
                    t: 2,
                    i: [{
                        t: 3
                    }],
                    s: "Hygienic and safe cleaning for your home"
                }
            },
            triedjustlifeappyet_non_uae: {
                t: 0,
                b: {
                    t: 2,
                    i: [{
                        t: 3
                    }],
                    s: "25% Off Home Cleaning"
                }
            },
            downloadapp_non_uae: {
                t: 0,
                b: {
                    t: 2,
                    i: [{
                        t: 3
                    }],
                    s: "Hygienic and safe cleaning for your home"
                }
            },
            usecode_non_uae: {
                t: 0,
                b: {
                    t: 2,
                    i: [{
                        t: 3
                    }],
                    s: "USE CODE: WB25"
                }
            },
            headerTextDesktop_non_uae: {
                t: 0,
                b: {
                    t: 2,
                    i: [{
                        t: 3
                    }],
                    s: "25% Off Home Cleaning"
                }
            },
            descriptionTextDesktop_non_uae: {
                t: 0,
                b: {
                    t: 2,
                    i: [{
                        t: 3
                    }],
                    s: "Hygienic and safe cleaning for your home"
                }
            },
            download_non_uae: {
                t: 0,
                b: {
                    t: 2,
                    i: [{
                        t: 3
                    }],
                    s: "Download & Get 25% Off"
                }
            }
        },
        return_home: {
            t: 0,
            b: {
                t: 2,
                i: [{
                    t: 3
                }],
                s: "Return to home"
            }
        },
        something_went_wrong: {
            t: 0,
            b: {
                t: 2,
                i: [{
                    t: 3
                }],
                s: "Something went wrong..."
            }
        },
        please_try_again: {
            t: 0,
            b: {
                t: 2,
                i: [{
                    t: 3
                }],
                s: "Please try again"
            }
        },
        you_look_lost: {
            t: 0,
            b: {
                t: 2,
                i: [{
                    t: 3
                }],
                s: "Oops! You look lost!"
            }
        },
        page_not_available: {
            t: 0,
            b: {
                t: 2,
                i: [{
                    t: 3
                }],
                s: "The page you are looking for is not available"
            }
        },
        long_wait: {
            t: 0,
            b: {
                t: 2,
                i: [{
                    t: 3
                }],
                s: "Looks like you have been waiting for while…"
            }
        },
        reload: {
            t: 0,
            b: {
                t: 2,
                i: [{
                    t: 3
                }],
                s: "Please <a href=''>reload the page</assets-local/bd0188b5c32d91f9.binassets-local/assets-local/bd0188b5c32d91f9.binbd0188b5c32d91f9.binassets-local/assets-local/bd0188b5c32d91f9.binassets-local/assets-local/bd0188b5c32d91f9.binbd0188b5c32d91f9.binbd0188b5c32d91f9.bina> and try again"
            }
        },
        cannot_change_city: {
            t: 0,
            b: {
                t: 2,
                i: [{
                    t: 3
                }],
                s: "You can not change your city while editing your address. Please add new address."
            }
        },
        cannot_change_country: {
            t: 0,
            b: {
                t: 2,
                i: [{
                    t: 3
                }],
                s: "You selected a different country. You will be redirected to first step."
            }
        },
        general_payment_error: {
            t: 0,
            b: {
                t: 2,
                i: [{
                    t: 3
                }],
                s: "An error occurred during your payment process. Please try again."
            }
        }
    },
    index: {
        section_hero: {
            main_title: {
                t: 0,
                b: {
                    static: "",
                    t: 2,
                    i: []
                }
            }
        },
        active_services: {
            show_more: {
                t: 0,
                b: {
                    t: 2,
                    i: [{
                        t: 3
                    }],
                    s: "Show More"
                }
            }
        },
        section_features: {
            main_title: {
                t: 0,
                b: {
                    t: 2,
                    i: [{
                        t: 3
                    }],
                    s: "There are so many reasons to love Justlife!"
                }
            },
            main_description: {
                t: 0,
                b: {
                    t: 2,
                    i: [{
                        t: 3
                    }],
                    s: "Here are the top 4!"
                }
            },
            feature_1_title: {
                t: 0,
                b: {
                    t: 2,
                    i: [{
                        t: 3
                    }],
                    s: "Top rated professionals"
                }
            },
            feature_1_description: {
                t: 0,
                b: {
                    t: 2,
                    i: [{
                        t: 3
                    }],
                    s: "Our professionals are reliable & well-trained, with an average rating of 4.78 out of 5!"
                }
            },
            feature_2_title: {
                t: 0,
                b: {
                    t: 2,
                    i: [{
                        t: 3
                    }],
                    s: "Same-day availability"
                }
            },
            feature_2_description: {
                t: 0,
                b: {
                    t: 2,
                    i: [{
                        t: 3
                    }],
                    s: "Book in less than 60 seconds, and even select same-day slots."
                }
            },
            feature_3_title: {
                t: 0,
                b: {
                    t: 2,
                    i: [{
                        t: 3
                    }],
                    s: "Top quality, value for money services"
                }
            },
            feature_3_description: {
                t: 0,
                b: {
                    t: 2,
                    i: [{
                        t: 3
                    }],
                    s: "Our professionals are equipped with the best tools and our services are always priced with you in mind."
                }
            },
            feature_4_title: {
                t: 0,
                b: {
                    t: 2,
                    i: [{
                        t: 3
                    }],
                    s: "Super app"
                }
            },
            feature_4_description: {
                t: 0,
                b: {
                    t: 2,
                    i: [{
                        t: 3
                    }],
                    s: "Being a Super app means we’ve got the widest range of home services, so we’ve got you covered!"
                }
            }
        },
        section_insurance: {
            main_title: {
                t: 0,
                b: {
                    t: 2,
                    i: [{
                        t: 3
                    }],
                    s: "The Justlife Promise – Excellence in Every Home"
                }
            },
            main_description: {
                t: 0,
                b: {
                    t: 2,
                    i: [{
                        t: 3
                    }],
                    s: "At Justlife, we commit to the highest standards of home care. Our trained professionals deliver a superior service experience, ensuring your home is in expert hands. Your peace of mind is our promise."
                }
            }
        },
        mobile_section: {
            top: {
                t: 0,
                b: {
                    t: 2,
                    i: [{
                        t: 3
                    }],
                    s: "Download our Super app!"
                }
            },
            title: {
                t: 0,
                b: {
                    t: 2,
                    i: [{
                        t: 3
                    }],
                    s: "Manage all to-dos with a single tap!"
                }
            },
            text: {
                t: 0,
                b: {
                    t: 2,
                    i: [{
                        t: 3
                    }],
                    s: "Book and manage your appointments, view your professional’s profile and ratings, get the latest offers, and much more."
                }
            },
            download: {
                t: 0,
                b: {
                    t: 2,
                    i: [{
                        t: 3
                    }],
                    s: "Download the free Justlife app for your phone."
                }
            }
        },
        seo_content: {
            title: {
                t: 0,
                b: {
                    t: 2,
                    i: [{
                        t: 3
                    }],
                    s: "Everything you need"
                }
            },
            question: {
                t: 0,
                b: {
                    t: 2,
                    i: [{
                        t: 3
                    }],
                    s: "What other services can we help you with?"
                }
            }
        },
        booking_touchpoint: {
            see_details: {
                t: 0,
                b: {
                    t: 2,
                    i: [{
                        t: 3
                    }],
                    s: "See Details"
                }
            }
        },
        service_start_price: {
            t: 0,
            b: {
                t: 2,
                i: [{
                    t: 4,
                    k: "amount"
                }, {
                    t: 3,
                    v: " /assets-local/bd0188b5c32d91f9.binassets-local/assets-local/bd0188b5c32d91f9.binbd0188b5c32d91f9.binassets-local/assets-local/bd0188b5c32d91f9.binassets-local/assets-local/bd0188b5c32d91f9.binbd0188b5c32d91f9.binbd0188b5c32d91f9.bin Hr"
                }]
            }
        }
    },
    status: {
        Unconfirmed: {
            t: 0,
            b: {
                t: 2,
                i: [{
                    t: 3
                }],
                s: "Unconfirmed"
            }
        },
        Confirmed: {
            t: 0,
            b: {
                t: 2,
                i: [{
                    t: 3
                }],
                s: "Confirmed"
            }
        },
        Cancelled: {
            t: 0,
            b: {
                t: 2,
                i: [{
                    t: 3
                }],
                s: "Cancelled"
            }
        },
        Completed: {
            t: 0,
            b: {
                t: 2,
                i: [{
                    t: 3
                }],
                s: "Completed"
            }
        }
    },
    metaData: {
        title: {
            settings: {
                t: 0,
                b: {
                    t: 2,
                    i: [{
                        t: 3
                    }],
                    s: "My Account Settings"
                }
            },
            appointments: {
                t: 0,
                b: {
                    t: 2,
                    i: [{
                        t: 3,
                        v: "My Appointments in "
                    }, {
                        t: 4,
                        k: "country"
                    }]
                }
            },
            support: {
                t: 0,
                b: {
                    t: 2,
                    i: [{
                        t: 3
                    }],
                    s: "Justlife Support"
                }
            },
            transactions: {
                t: 0,
                b: {
                    t: 2,
                    i: [{
                        t: 3
                    }],
                    s: "Transactions"
                }
            },
            justlife_credits: {
                t: 0,
                b: {
                    t: 2,
                    i: [{
                        t: 3
                    }],
                    s: "Justlife Credit"
                }
            },
            credit_details: {
                t: 0,
                b: {
                    t: 2,
                    i: [{
                        t: 3
                    }],
                    s: "Credit Details"
                }
            },
            credit_packages: {
                t: 0,
                b: {
                    t: 2,
                    i: [{
                        t: 3
                    }],
                    s: "Credit Packages"
                }
            },
            careem_support: {
                t: 0,
                b: {
                    t: 2,
                    i: [{
                        t: 3
                    }],
                    s: "Your Justlife x Careem Support"
                }
            },
            apply: {
                t: 0,
                b: {
                    t: 2,
                    i: [{
                        t: 3
                    }],
                    s: "Justlife.com Job Vacancies"
                }
            },
            appointmentHelp: {
                t: 0,
                b: {
                    t: 1,
                    c: [{
                        t: 2,
                        i: [{
                            t: 3
                        }],
                        s: "Appointment Help"
                    }, {
                        t: 2,
                        i: [{
                            t: 3,
                            v: "Justlife "
                        }, {
                            t: 4,
                            k: "country"
                        }]
                    }]
                }
            },
            cards: {
                t: 0,
                b: {
                    t: 1,
                    c: [{
                        t: 2,
                        i: [{
                            t: 3
                        }],
                        s: "My Credit Cards"
                    }, {
                        t: 2,
                        i: [{
                            t: 3,
                            v: "Justlife "
                        }, {
                            t: 4,
                            k: "country"
                        }]
                    }]
                }
            },
            details: {
                t: 0,
                b: {
                    t: 1,
                    c: [{
                        t: 2,
                        i: [{
                            t: 3
                        }],
                        s: "My Details"
                    }, {
                        t: 2,
                        i: [{
                            t: 3,
                            v: "Justlife "
                        }, {
                            t: 4,
                            k: "country"
                        }]
                    }]
                }
            },
            faq: {
                t: 0,
                b: {
                    t: 2,
                    i: [{
                        t: 3,
                        v: "FAQ "
                    }, {
                        t: 9,
                        v: "|"
                    }, {
                        t: 3,
                        v: " "
                    }, {
                        t: 4,
                        k: "country"
                    }]
                }
            },
            freeCleanings: {
                t: 0,
                b: {
                    t: 1,
                    c: [{
                        t: 2,
                        i: [{
                            t: 3
                        }],
                        s: "Free Cleanings"
                    }, {
                        t: 2,
                        i: [{
                            t: 3,
                            v: "Justlife "
                        }, {
                            t: 4,
                            k: "country"
                        }]
                    }]
                }
            },
            help: {
                t: 0,
                b: {
                    t: 1,
                    c: [{
                        t: 2,
                        i: [{
                            t: 3
                        }],
                        s: "Help"
                    }, {
                        t: 2,
                        i: [{
                            t: 3,
                            v: "Justlife "
                        }, {
                            t: 4,
                            k: "country"
                        }]
                    }]
                }
            },
            funnel: {
                t: 0,
                b: {
                    t: 1,
                    c: [{
                        t: 2,
                        i: [{
                            t: 3,
                            v: "Best House Maids in House Cleaning Services in "
                        }, {
                            t: 4,
                            k: "country"
                        }]
                    }, {
                        t: 2,
                        i: [{
                            t: 3,
                            v: "Justlife "
                        }, {
                            t: 4,
                            k: "country"
                        }]
                    }]
                }
            }
        },
        description: {
            settings: {
                t: 0,
                b: {
                    t: 2,
                    i: [{
                        t: 3
                    }],
                    s: "Explore your Justlife account settings and control them to what suits you best."
                }
            },
            appointments: {
                t: 0,
                b: {
                    t: 2,
                    i: [{
                        t: 3
                    }],
                    s: "Book your PCR Test from the comfort of your home, office, or hotel and receive the medical team within 2 hours of your booking. Book a norma, VIP, or even group test to match your needs."
                }
            },
            support: {
                t: 0,
                b: {
                    t: 2,
                    i: [{
                        t: 3
                    }],
                    s: "Get the help you need from our customer support team to cater to you the best solutions based on your needs."
                }
            },
            transactions: {
                t: 0,
                b: {
                    t: 2,
                    i: [{
                        t: 3
                    }],
                    s: "Find the full list of your transations history on your Justlife account."
                }
            },
            justlife_credits: {
                t: 0,
                b: {
                    t: 2,
                    i: [{
                        t: 3
                    }],
                    s: "Check your credit details on your Justlife account."
                }
            },
            credit_details: {
                t: 0,
                b: {
                    t: 2,
                    i: [{
                        t: 3
                    }],
                    s: "Find all you need to know about your credit's details."
                }
            },
            credit_packages: {
                t: 0,
                b: {
                    t: 2,
                    i: [{
                        t: 3
                    }],
                    s: "Check your Justlife account credit packages."
                }
            },
            careem_support: {
                t: 0,
                b: {
                    t: 2,
                    i: [{
                        t: 3
                    }],
                    s: "Get all your careem related questions answered from our customer support team."
                }
            }
        }
    },
    relief: {
        submit: {
            t: 0,
            b: {
                t: 2,
                i: [{
                    t: 3
                }],
                s: "SUBMIT"
            }
        }
    },
    flex: {
        add: {
            t: 0,
            b: {
                t: 2,
                i: [{
                    t: 3
                }],
                s: "Add"
            }
        },
        add_to_basket: {
            t: 0,
            b: {
                t: 2,
                i: [{
                    t: 3
                }],
                s: "Add to Basket"
            }
        },
        update: {
            t: 0,
            b: {
                t: 2,
                i: [{
                    t: 3
                }],
                s: "Update"
            }
        },
        hint: {
            t: 0,
            b: {
                t: 2,
                i: [{
                    t: 3
                }],
                s: "Example: Key under the mat, pet in the house, lock the door, etc."
            }
        }
    },
    location: {
        popup_text: {
            t: 0,
            b: {
                t: 2,
                i: [{
                    t: 3
                }],
                s: "Location services is disabled. 😞 Please enable location services in your browser settings so we can locate you on the map."
            }
        }
    },
    credit_package: {
        title: {
            t: 0,
            b: {
                t: 2,
                i: [{
                    t: 3
                }],
                s: "Credit Packages"
            }
        },
        jm_credit: {
            t: 0,
            b: {
                t: 2,
                i: [{
                    t: 3
                }],
                s: "Justlife Credit"
            }
        }
    },
    cleaners: {
        recommended: {
            t: 0,
            b: {
                t: 2,
                i: [{
                    t: 3
                }],
                s: "Recommended in your area"
            }
        },
        recommended_by_friend: {
            t: 0,
            b: {
                t: 2,
                i: [{
                    t: 3
                }],
                s: "Recommended by your friends"
            }
        }
    },
    rate: {
        desc: {
            t: 0,
            b: {
                t: 2,
                i: [{
                    t: 3
                }],
                s: "This appointment can not be rated after 30 days have passed. Reach out to us here if you need help"
            }
        },
        book_again: {
            t: 0,
            b: {
                t: 2,
                i: [{
                    t: 3
                }],
                s: "Book Again"
            }
        },
        instructions: {
            t: 0,
            b: {
                t: 2,
                i: [{
                    t: 3
                }],
                s: "Instructions"
            }
        },
        add_instruction: {
            t: 0,
            b: {
                t: 2,
                i: [{
                    t: 3
                }],
                s: "Add instructions"
            }
        },
        edit_instruction: {
            t: 0,
            b: {
                t: 2,
                i: [{
                    t: 3
                }],
                s: "Edit instructions"
            }
        },
        pay_by_card: {
            t: 0,
            b: {
                t: 2,
                i: [{
                    t: 3
                }],
                s: "Pay By Card"
            }
        }
    },
    durationModal: {
        title: {
            t: 0,
            b: {
                t: 2,
                i: [{
                    t: 3
                }],
                s: "How long should I book for?"
            }
        },
        top_desc: {
            t: 0,
            b: {
                t: 2,
                i: [{
                    t: 3
                }],
                s: "Every house is different, but as a general rule of thumb; each bedroom you have will mean an extra hour of cleaning. You can refer to the table below:"
            }
        },
        table: {
            number_of_bedrooms: {
                t: 0,
                b: {
                    t: 2,
                    i: [{
                        t: 3
                    }],
                    s: "Number of Bedrooms"
                }
            },
            duration_of_cleaning: {
                t: 0,
                b: {
                    t: 2,
                    i: [{
                        t: 3
                    }],
                    s: "Duration of Cleaning*"
                }
            },
            studio: {
                t: 0,
                b: {
                    t: 2,
                    i: [{
                        t: 3
                    }],
                    s: "Studio"
                }
            },
            "1_bedroom": {
                t: 0,
                b: {
                    t: 2,
                    i: [{
                        t: 3
                    }],
                    s: "1 Bedroom"
                }
            },
            "2_bedrooms": {
                t: 0,
                b: {
                    t: 2,
                    i: [{
                        t: 3
                    }],
                    s: "2 Bedrooms"
                }
            },
            "3_bedrooms": {
                t: 0,
                b: {
                    t: 2,
                    i: [{
                        t: 3
                    }],
                    s: "3 Bedrooms"
                }
            },
            "4_bedrooms": {
                t: 0,
                b: {
                    t: 2,
                    i: [{
                        t: 3
                    }],
                    s: "4 Bedrooms"
                }
            },
            "5_bedrooms": {
                t: 0,
                b: {
                    t: 2,
                    i: [{
                        t: 3
                    }],
                    s: "5 Bedrooms"
                }
            },
            "2_hours": {
                t: 0,
                b: {
                    t: 2,
                    i: [{
                        t: 3
                    }],
                    s: "2 hours"
                }
            },
            "2_3_hours": {
                t: 0,
                b: {
                    t: 2,
                    i: [{
                        t: 3
                    }],
                    s: "2-3 hours"
                }
            },
            "3_4_hours": {
                t: 0,
                b: {
                    t: 2,
                    i: [{
                        t: 3
                    }],
                    s: "3-4 hours"
                }
            },
            "4_5_hours": {
                t: 0,
                b: {
                    t: 2,
                    i: [{
                        t: 3
                    }],
                    s: "4-5 hours"
                }
            },
            "5_6_hours": {
                t: 0,
                b: {
                    t: 2,
                    i: [{
                        t: 3
                    }],
                    s: "5-6 hours"
                }
            },
            "6_7_hours": {
                t: 0,
                b: {
                    t: 2,
                    i: [{
                        t: 3
                    }],
                    s: "6-7 hours"
                }
            }
        },
        desc: {
            t: 0,
            b: {
                t: 2,
                i: [{
                    t: 3
                }],
                s: "*Regular cleaning includes general cleaning, wiping of surfaces, dusting, sweeping, mopping, and vacuuming. If you are planning to have extra tasks such as cleaning the oven or fridge, wiping blinds, or cleaning balcony, we suggest adding an extra 30-45 min per task."
            }
        },
        desc_2: {
            t: 0,
            b: {
                t: 2,
                i: [{
                    t: 3
                }],
                s: "If you live in a villa, we suggest you book an extra hour."
            }
        },
        desc_3: {
            t: 0,
            b: {
                t: 2,
                i: [{
                    t: 3
                }],
                s: "Below is a checklist for a regular cleaning, but you should talk to your professional about what you would like done within your home:"
            }
        },
        kitchen: {
            title: {
                t: 0,
                b: {
                    t: 2,
                    i: [{
                        t: 3
                    }],
                    s: "Kitchen - 30 mins"
                }
            },
            item_1: {
                t: 0,
                b: {
                    t: 2,
                    i: [{
                        t: 3
                    }],
                    s: "Wash dishes"
                }
            },
            item_2: {
                t: 0,
                b: {
                    t: 2,
                    i: [{
                        t: 3
                    }],
                    s: "Wipe sink, countertops"
                }
            },
            item_3: {
                t: 0,
                b: {
                    t: 2,
                    i: [{
                        t: 3
                    }],
                    s: "Wipe kitchen appliances"
                }
            }
        },
        bathroom: {
            title: {
                t: 0,
                b: {
                    t: 2,
                    i: [{
                        t: 3
                    }],
                    s: "Bathroom - 30 mins"
                }
            },
            item_1: {
                t: 0,
                b: {
                    t: 2,
                    i: [{
                        t: 3
                    }],
                    s: "Clean bathtub, showers"
                }
            },
            item_2: {
                t: 0,
                b: {
                    t: 2,
                    i: [{
                        t: 3
                    }],
                    s: "Clean toilet, bidet"
                }
            },
            item_3: {
                t: 0,
                b: {
                    t: 2,
                    i: [{
                        t: 3
                    }],
                    s: "Wipe sink, countertops"
                }
            },
            item_4: {
                t: 0,
                b: {
                    t: 2,
                    i: [{
                        t: 3
                    }],
                    s: "Hang/assets-local/bd0188b5c32d91f9.binassets-local/assets-local/bd0188b5c32d91f9.binbd0188b5c32d91f9.binassets-local/assets-local/bd0188b5c32d91f9.binassets-local/assets-local/bd0188b5c32d91f9.binbd0188b5c32d91f9.binbd0188b5c32d91f9.binFold towels"
                }
            },
            item_5: {
                t: 0,
                b: {
                    t: 2,
                    i: [{
                        t: 3
                    }],
                    s: "Clean mirrors"
                }
            }
        },
        bedroom: {
            title: {
                t: 0,
                b: {
                    t: 2,
                    i: [{
                        t: 3
                    }],
                    s: "Bedroom - 20 mins"
                }
            },
            item_1: {
                t: 0,
                b: {
                    t: 2,
                    i: [{
                        t: 3
                    }],
                    s: "Make beds"
                }
            },
            item_2: {
                t: 0,
                b: {
                    t: 2,
                    i: [{
                        t: 3
                    }],
                    s: "Fold clothes"
                }
            },
            item_3: {
                t: 0,
                b: {
                    t: 2,
                    i: [{
                        t: 3
                    }],
                    s: "Clear mirrors"
                }
            }
        },
        general: {
            title: {
                t: 0,
                b: {
                    t: 2,
                    i: [{
                        t: 3
                    }],
                    s: "General - 40 mins"
                }
            },
            item_1: {
                t: 0,
                b: {
                    t: 2,
                    i: [{
                        t: 3
                    }],
                    s: "Organize items"
                }
            },
            item_2: {
                t: 0,
                b: {
                    t: 2,
                    i: [{
                        t: 3
                    }],
                    s: "Vacuum floors /assets-local/bd0188b5c32d91f9.binassets-local/assets-local/bd0188b5c32d91f9.binbd0188b5c32d91f9.binassets-local/assets-local/bd0188b5c32d91f9.binassets-local/assets-local/bd0188b5c32d91f9.binbd0188b5c32d91f9.binbd0188b5c32d91f9.bin rug"
                }
            },
            item_3: {
                t: 0,
                b: {
                    t: 2,
                    i: [{
                        t: 3
                    }],
                    s: "Dust down furniture"
                }
            },
            item_4: {
                t: 0,
                b: {
                    t: 2,
                    i: [{
                        t: 3
                    }],
                    s: "Dust down all surfaces"
                }
            },
            item_5: {
                t: 0,
                b: {
                    t: 2,
                    i: [{
                        t: 3
                    }],
                    s: "Wipe light switches"
                }
            },
            item_6: {
                t: 0,
                b: {
                    t: 2,
                    i: [{
                        t: 3
                    }],
                    s: "Wipe door handles"
                }
            },
            item_7: {
                t: 0,
                b: {
                    t: 2,
                    i: [{
                        t: 3
                    }],
                    s: "Wipe window ledges"
                }
            },
            item_8: {
                t: 0,
                b: {
                    t: 2,
                    i: [{
                        t: 3
                    }],
                    s: "Mop floors"
                }
            },
            item_9: {
                t: 0,
                b: {
                    t: 2,
                    i: [{
                        t: 3
                    }],
                    s: "Take out rubbish"
                }
            }
        },
        extras: {
            title: {
                t: 0,
                b: {
                    t: 2,
                    i: [{
                        t: 3
                    }],
                    s: "Extras - add an extra 30-45 mins per task"
                }
            },
            item_1: {
                t: 0,
                b: {
                    t: 2,
                    i: [{
                        t: 3
                    }],
                    s: "Do the laundry"
                }
            },
            item_2: {
                t: 0,
                b: {
                    t: 2,
                    i: [{
                        t: 3
                    }],
                    s: "Change sheets, pillowcases"
                }
            },
            item_3: {
                t: 0,
                b: {
                    t: 2,
                    i: [{
                        t: 3
                    }],
                    s: "Clean interior windows"
                }
            },
            item_4: {
                t: 0,
                b: {
                    t: 2,
                    i: [{
                        t: 3
                    }],
                    s: "Clean balcony/assets-local/bd0188b5c32d91f9.binassets-local/assets-local/bd0188b5c32d91f9.binbd0188b5c32d91f9.binassets-local/assets-local/bd0188b5c32d91f9.binassets-local/assets-local/bd0188b5c32d91f9.binbd0188b5c32d91f9.binbd0188b5c32d91f9.binpatio"
                }
            },
            item_5: {
                t: 0,
                b: {
                    t: 2,
                    i: [{
                        t: 3
                    }],
                    s: "Clean inside cupboards"
                }
            },
            item_6: {
                t: 0,
                b: {
                    t: 2,
                    i: [{
                        t: 3
                    }],
                    s: "Clean inside oven/assets-local/bd0188b5c32d91f9.binassets-local/assets-local/bd0188b5c32d91f9.binbd0188b5c32d91f9.binassets-local/assets-local/bd0188b5c32d91f9.binassets-local/assets-local/bd0188b5c32d91f9.binbd0188b5c32d91f9.binbd0188b5c32d91f9.binfridge"
                }
            }
        }
    },
    materialModal: {
        title: {
            t: 0,
            b: {
                t: 2,
                i: [{
                    t: 3
                }],
                s: "What cleaning materials are included?"
            }
        },
        top_desc: {
            t: 0,
            b: {
                t: 2,
                i: [{
                    t: 3
                }],
                s: "If you choose to include cleaning materials in your appointment, our crew will come with their own Justlife kit that includes the following:"
            }
        },
        table: {
            cleaning_products: {
                t: 0,
                b: {
                    t: 2,
                    i: [{
                        t: 3
                    }],
                    s: "Cleaning Products"
                }
            },
            cleaning_equipment: {
                t: 0,
                b: {
                    t: 2,
                    i: [{
                        t: 3
                    }],
                    s: "Cleaning Equipment"
                }
            },
            studio: {
                t: 0,
                b: {
                    t: 2,
                    i: [{
                        t: 3
                    }],
                    s: "Floor cleaner"
                }
            },
            "1_bedroom": {
                t: 0,
                b: {
                    t: 2,
                    i: [{
                        t: 3
                    }],
                    s: "Toilet cleaner"
                }
            },
            "2_bedrooms": {
                t: 0,
                b: {
                    t: 2,
                    i: [{
                        t: 3
                    }],
                    s: "Multi-purpose cleaner"
                }
            },
            "3_bedrooms": {
                t: 0,
                b: {
                    t: 2,
                    i: [{
                        t: 3
                    }],
                    s: "Glass cleaner"
                }
            },
            "4_bedrooms": {
                t: 0,
                b: {
                    t: 2,
                    i: [{
                        t: 3
                    }],
                    s: "Cream cleaner"
                }
            },
            "5_bedrooms": {
                t: 0,
                b: {
                    t: 2,
                    i: [{
                        t: 3
                    }],
                    s: "Wood furtniture polish"
                }
            },
            "2_hours": {
                t: 0,
                b: {
                    t: 2,
                    i: [{
                        t: 3
                    }],
                    s: "Vacuum cleaner"
                }
            },
            "2_3_hours": {
                t: 0,
                b: {
                    t: 2,
                    i: [{
                        t: 3
                    }],
                    s: "Mop"
                }
            },
            "3_4_hours": {
                t: 0,
                b: {
                    t: 2,
                    i: [{
                        t: 3
                    }],
                    s: "Bucket & spinner"
                }
            },
            "4_5_hours": {
                t: 0,
                b: {
                    t: 2,
                    i: [{
                        t: 3
                    }],
                    s: "Microfibere cloth"
                }
            },
            "5_6_hours": {
                t: 0,
                b: {
                    t: 2,
                    i: [{
                        t: 3
                    }],
                    s: "Sponge cloth"
                }
            },
            "6_7_hours": {
                t: 0,
                b: {
                    t: 2,
                    i: [{
                        t: 3
                    }],
                    s: "Scouring pad"
                }
            }
        }
    },
    careem: {
        frequency_title: {
            t: 0,
            b: {
                t: 2,
                i: [{
                    t: 3
                }],
                s: "How often do you want your home cleaned?"
            }
        },
        option_1_desc: {
            t: 0,
            b: {
                t: 2,
                i: [{
                    t: 3
                }],
                s: "Book one cleaning session only"
            }
        },
        book_cleaning: {
            t: 0,
            b: {
                t: 2,
                i: [{
                    t: 3,
                    v: "Book "
                }, {
                    t: 4,
                    k: "service_type_name"
                }]
            }
        },
        manage_appointment_details: {
            t: 0,
            b: {
                t: 2,
                i: [{
                    t: 3
                }],
                s: "Manage Appointment Details"
            }
        },
        service_text: {
            t: 0,
            b: {
                t: 2,
                i: [{
                    t: 3
                }],
                s: "Which professional do you prefer?"
            }
        },
        top_rated: {
            t: 0,
            b: {
                t: 2,
                i: [{
                    t: 3
                }],
                s: "Top-rated professionals in your area"
            }
        }
    },
    quick_help: {
        title: {
            t: 0,
            b: {
                t: 2,
                i: [{
                    t: 3
                }],
                s: "Quick Help"
            }
        },
        live_chat_with_us: {
            t: 0,
            b: {
                t: 2,
                i: [{
                    t: 3
                }],
                s: "LIVE CHAT WITH US"
            }
        },
        chat_with_us: {
            t: 0,
            b: {
                t: 2,
                i: [{
                    t: 3
                }],
                s: "Chat With Us"
            }
        },
        call_me_back: {
            t: 0,
            b: {
                t: 2,
                i: [{
                    t: 3
                }],
                s: "Request a Callback"
            }
        },
        create_support_ticket: {
            t: 0,
            b: {
                t: 2,
                i: [{
                    t: 3
                }],
                s: "Create Support Ticket"
            }
        },
        create_ticket: {
            t: 0,
            b: {
                t: 2,
                i: [{
                    t: 3
                }],
                s: "Create Ticket"
            }
        },
        ticket_placeholder: {
            t: 0,
            b: {
                t: 2,
                i: [{
                    t: 3
                }],
                s: "How can we help you"
            }
        },
        appointment_details: {
            t: 0,
            b: {
                t: 2,
                i: [{
                    t: 3
                }],
                s: "Appointment Details"
            }
        },
        reschedule: {
            t: 0,
            b: {
                t: 2,
                i: [{
                    t: 3
                }],
                s: "Reschedule"
            }
        },
        cancel: {
            t: 0,
            b: {
                t: 2,
                i: [{
                    t: 3
                }],
                s: "Cancel"
            }
        },
        add_instructions: {
            t: 0,
            b: {
                t: 2,
                i: [{
                    t: 3
                }],
                s: "Add Instructions"
            }
        },
        change_duration: {
            t: 0,
            b: {
                t: 2,
                i: [{
                    t: 3
                }],
                s: "Change duration"
            }
        },
        extend_duration: {
            t: 0,
            b: {
                t: 2,
                i: [{
                    t: 3
                }],
                s: "Extend duration"
            }
        },
        change_material: {
            t: 0,
            b: {
                t: 2,
                i: [{
                    t: 3
                }],
                s: "Change materials"
            }
        },
        change_address: {
            t: 0,
            b: {
                t: 2,
                i: [{
                    t: 3
                }],
                s: "Change address"
            }
        },
        ticket_created_success: {
            t: 0,
            b: {
                t: 2,
                i: [{
                    t: 3
                }],
                s: "Your ticket has been created successfully."
            }
        },
        empty_state_text: {
            t: 0,
            b: {
                t: 2,
                i: [{
                    t: 3
                }],
                s: "There aren't any questions"
            }
        },
        your_latest_appointment: {
            t: 0,
            b: {
                t: 2,
                i: [{
                    t: 3
                }],
                s: "Your Latest Appointment"
            }
        },
        view_all: {
            t: 0,
            b: {
                t: 2,
                i: [{
                    t: 3
                }],
                s: "View All"
            }
        }
    },
    modify: {
        change_material_title: {
            t: 0,
            b: {
                t: 2,
                i: [{
                    t: 3
                }],
                s: "Cleaning Materials Options"
            }
        },
        change_duration_title: {
            t: 0,
            b: {
                t: 2,
                i: [{
                    t: 3
                }],
                s: "Change Duration"
            }
        },
        extend_duration_title: {
            t: 0,
            b: {
                t: 2,
                i: [{
                    t: 3
                }],
                s: "Extend Duration"
            }
        },
        professional_note: {
            t: 0,
            b: {
                t: 2,
                i: [{
                    t: 3,
                    v: "Not available for more than "
                }, {
                    t: 4,
                    k: "hours"
                }, {
                    t: 3,
                    v: " hours"
                }]
            }
        },
        refund_text: {
            t: 0,
            b: {
                t: 2,
                i: [{
                    t: 4,
                    k: "price"
                }, {
                    t: 3,
                    v: " will be reduced from the booking amount."
                }]
            }
        },
        extra_amount_text: {
            t: 0,
            b: {
                t: 2,
                i: [{
                    t: 4,
                    k: "price"
                }, {
                    t: 3,
                    v: " will be added to the booking total."
                }]
            }
        },
        material_single_discount: {
            t: 0,
            b: {
                t: 2,
                i: [{
                    t: 3,
                    v: "Your "
                }, {
                    t: 4,
                    k: "discount"
                }, {
                    t: 3,
                    v: " discount has been applied to material price."
                }]
            }
        },
        material_multi_discount: {
            t: 0,
            b: {
                t: 2,
                i: [{
                    t: 3,
                    v: "Your "
                }, {
                    t: 4,
                    k: "discount1"
                }, {
                    t: 3,
                    v: " and "
                }, {
                    t: 4,
                    k: "discount2"
                }, {
                    t: 3,
                    v: " discount has been applied to material price."
                }]
            }
        },
        duration_single_discount: {
            t: 0,
            b: {
                t: 2,
                i: [{
                    t: 3,
                    v: "Your "
                }, {
                    t: 4,
                    k: "discount"
                }, {
                    t: 3,
                    v: " discount has been applied to preferred duration price."
                }]
            }
        },
        duration_multi_discount: {
            t: 0,
            b: {
                t: 2,
                i: [{
                    t: 3,
                    v: "Your "
                }, {
                    t: 4,
                    k: "discount1"
                }, {
                    t: 3,
                    v: " and "
                }, {
                    t: 4,
                    k: "discount2"
                }, {
                    t: 3,
                    v: " discount has been applied to preferred duration price."
                }]
            }
        },
        assigned_professionals: {
            t: 0,
            b: {
                t: 2,
                i: [{
                    t: 3
                }],
                s: "Your assigned professionals"
            }
        },
        professional_subtitle: {
            t: 0,
            b: {
                t: 2,
                i: [{
                    t: 3
                }],
                s: "Your preferred professional"
            }
        },
        cleaner_no_material: {
            t: 0,
            b: {
                t: 2,
                i: [{
                    t: 3
                }],
                s: "Cleaning materials unavailable"
            }
        },
        sorry_title: {
            t: 0,
            b: {
                t: 2,
                i: [{
                    t: 3
                }],
                s: "Sorry!"
            }
        },
        sorry_description: {
            t: 0,
            b: {
                t: 2,
                i: [{
                    t: 3
                }],
                s: "We won’t be able to make the requested changes to this booking since the professional will not be available."
            }
        },
        buttons: {
            confirm: {
                t: 0,
                b: {
                    t: 2,
                    i: [{
                        t: 3
                    }],
                    s: "Confirm"
                }
            },
            okay: {
                t: 0,
                b: {
                    t: 2,
                    i: [{
                        t: 3
                    }],
                    s: "Okay"
                }
            },
            assign: {
                t: 0,
                b: {
                    t: 2,
                    i: [{
                        t: 3
                    }],
                    s: "Assign Top-Rated Professional"
                }
            },
            assign_2: {
                t: 0,
                b: {
                    t: 2,
                    i: [{
                        t: 3
                    }],
                    s: "Proceed with new professional"
                }
            },
            reschedule: {
                t: 0,
                b: {
                    t: 2,
                    i: [{
                        t: 3
                    }],
                    s: "Reschedule the Booking"
                }
            },
            reschedule_secondary: {
                t: 0,
                b: {
                    t: 2,
                    i: [{
                        t: 3
                    }],
                    s: "I'll Reschedule This Booking"
                }
            },
            reschedule_2: {
                t: 0,
                b: {
                    t: 2,
                    i: [{
                        t: 3
                    }],
                    s: "Reschedule this booking"
                }
            },
            back_to_booking: {
                t: 0,
                b: {
                    t: 2,
                    i: [{
                        t: 3
                    }],
                    s: "Back to Booking Details"
                }
            },
            chat: {
                t: 0,
                b: {
                    t: 2,
                    i: [{
                        t: 3
                    }],
                    s: "Chat with us"
                }
            },
            cancel: {
                t: 0,
                b: {
                    t: 2,
                    i: [{
                        t: 3
                    }],
                    s: "Cancel this booking"
                }
            }
        },
        outside_scheduled_city: {
            t: 0,
            b: {
                t: 2,
                i: [{
                    t: 3
                }],
                s: "Address is outside original booking city"
            }
        },
        does_not_serve_area: {
            t: 0,
            b: {
                t: 2,
                i: [{
                    t: 3
                }],
                s: "Does not serve this area"
            }
        },
        professional_not_available_title: {
            t: 0,
            b: {
                t: 2,
                i: [{
                    t: 4,
                    k: "name"
                }, {
                    t: 3,
                    v: " is unavailable"
                }]
            }
        },
        professional_not_available_description: {
            t: 0,
            b: {
                t: 2,
                i: [{
                    t: 3
                }],
                s: "Your scheduled professional does not serve this location, but we promise to assign you another top rated professional"
            }
        },
        professionals_not_available_title: {
            t: 0,
            b: {
                t: 2,
                i: [{
                    t: 3
                }],
                s: "Your professionals are unavailable"
            }
        },
        professionals_not_available_description: {
            t: 0,
            b: {
                t: 2,
                i: [{
                    t: 3
                }],
                s: "Your scheduled professionals do not serve this location, but we promise to assign top rated professionals"
            }
        },
        address_change_sorry_description: {
            t: 0,
            b: {
                t: 2,
                i: [{
                    t: 3
                }],
                s: "You can no longer make changes to this booking as the session starts soon. Speak to our agents on live chat for any further assistance."
            }
        },
        fully_booked_title: {
            t: 0,
            b: {
                t: 2,
                i: [{
                    t: 3
                }],
                s: "We are fully booked"
            }
        },
        fully_booked_description: {
            t: 0,
            b: {
                t: 2,
                i: [{
                    t: 3
                }],
                s: "Sorry! All our professionals are fully booked in the selected location."
            }
        }
    },
    addresses: {
        select_your_address: {
            t: 0,
            b: {
                t: 2,
                i: [{
                    t: 3
                }],
                s: "Select your address"
            }
        },
        add_new_address: {
            t: 0,
            b: {
                t: 2,
                i: [{
                    t: 3
                }],
                s: "Add new address"
            }
        },
        to_manage: {
            t: 0,
            b: {
                t: 2,
                i: [{
                    t: 3
                }],
                s: "To manage your addresses go to your"
            }
        },
        page: {
            t: 0,
            b: {
                t: 2,
                i: [{
                    t: 3
                }],
                s: "Settings > My Addresses page"
            }
        }
    },
    alias: {
        title: {
            t: 0,
            b: {
                t: 2,
                i: [{
                    t: 3
                }],
                s: "Address Nickname"
            }
        },
        home: {
            t: 0,
            b: {
                t: 2,
                i: [{
                    t: 3
                }],
                s: "Home"
            }
        },
        home_careem: {
            t: 0,
            b: {
                t: 2,
                i: [{
                    t: 3
                }],
                s: "Home"
            }
        },
        office: {
            t: 0,
            b: {
                t: 2,
                i: [{
                    t: 3
                }],
                s: "Office"
            }
        },
        office_careem: {
            t: 0,
            b: {
                t: 2,
                i: [{
                    t: 3
                }],
                s: "Work"
            }
        },
        other: {
            t: 0,
            b: {
                t: 2,
                i: [{
                    t: 3
                }],
                s: "Other"
            }
        }
    },
    interval: {
        text: {
            t: 0,
            b: {
                t: 2,
                i: [{
                    t: 3,
                    v: "Your professional will arrive between "
                }, {
                    t: 4,
                    k: "time"
                }]
            }
        },
        start_time: {
            t: 0,
            b: {
                t: 2,
                i: [{
                    t: 3
                }],
                s: "Start Time"
            }
        },
        remote_text: {
            t: 0,
            b: {
                t: 2,
                i: [{
                    t: 3
                }],
                s: "Your session will be a 45-min online video chat. The details will be shared via email prior to your session"
            }
        }
    },
    justlife_credits: {
        title: {
            t: 0,
            b: {
                t: 2,
                i: [{
                    t: 3
                }],
                s: "Justlife Credits"
            }
        },
        subtitle: {
            t: 0,
            b: {
                t: 2,
                i: [{
                    t: 3
                }],
                s: "Total Credit"
            }
        },
        cta_description_zero: {
            t: 0,
            b: {
                t: 2,
                i: [{
                    t: 3
                }],
                s: "Select the package that suits you best and get up to an 18% extra Justlife credit on all services."
            }
        },
        cta_description_book: {
            t: 0,
            b: {
                t: 2,
                i: [{
                    t: 3
                }],
                s: "Book now by using one of your available credits or select a new package by choosing Buy Credit."
            }
        },
        cta_description_ksa: {
            t: 0,
            b: {
                t: 2,
                i: [{
                    t: 3
                }],
                s: "Use your available credits by creating a new booking."
            }
        },
        choose_service: {
            t: 0,
            b: {
                t: 2,
                i: [{
                    t: 3
                }],
                s: "Choose a Service"
            }
        },
        valid_days: {
            t: 0,
            b: {
                t: 2,
                i: [{
                    t: 3
                }],
                s: "Valid Days"
            }
        },
        buttons: {
            buy_credit: {
                t: 0,
                b: {
                    t: 2,
                    i: [{
                        t: 3
                    }],
                    s: "Buy Credit"
                }
            },
            book_now: {
                t: 0,
                b: {
                    t: 2,
                    i: [{
                        t: 3
                    }],
                    s: "Book Now"
                }
            },
            see_transactions: {
                t: 0,
                b: {
                    t: 2,
                    i: [{
                        t: 3
                    }],
                    s: "See Transactions"
                }
            },
            see_all_transactions: {
                t: 0,
                b: {
                    t: 2,
                    i: [{
                        t: 3
                    }],
                    s: "See all transaction history"
                }
            },
            view_all: {
                t: 0,
                b: {
                    t: 2,
                    i: [{
                        t: 3
                    }],
                    s: "View All"
                }
            },
            details: {
                t: 0,
                b: {
                    t: 2,
                    i: [{
                        t: 3
                    }],
                    s: "Details"
                }
            }
        },
        labels: {
            expires_on: {
                t: 0,
                b: {
                    t: 2,
                    i: [{
                        t: 3,
                        v: "Expires on "
                    }, {
                        t: 4,
                        k: "date"
                    }]
                }
            },
            expired_on: {
                t: 0,
                b: {
                    t: 2,
                    i: [{
                        t: 3,
                        v: "Expired on "
                    }, {
                        t: 4,
                        k: "date"
                    }]
                }
            },
            only_valid: {
                t: 0,
                b: {
                    t: 2,
                    i: [{
                        t: 3,
                        v: "Only valid in "
                    }, {
                        t: 4,
                        k: "country"
                    }]
                }
            },
            reference_code: {
                t: 0,
                b: {
                    t: 2,
                    i: [{
                        t: 3
                    }],
                    s: "Reference Code"
                }
            },
            used: {
                t: 0,
                b: {
                    t: 2,
                    i: [{
                        t: 3
                    }],
                    s: "Used"
                }
            },
            expired: {
                t: 0,
                b: {
                    t: 2,
                    i: [{
                        t: 3
                    }],
                    s: "Expired"
                }
            },
            received: {
                t: 0,
                b: {
                    t: 2,
                    i: [{
                        t: 3
                    }],
                    s: "Received"
                }
            }
        },
        credits: {
            title: {
                t: 0,
                b: {
                    t: 2,
                    i: [{
                        t: 3
                    }],
                    s: "Available Credits"
                }
            },
            empty_state_description: {
                t: 0,
                b: {
                    t: 2,
                    i: [{
                        t: 3
                    }],
                    s: "You do not have any available credits"
                }
            }
        },
        transactions: {
            title: {
                t: 0,
                b: {
                    t: 2,
                    i: [{
                        t: 3
                    }],
                    s: "Transactions History"
                }
            },
            empty_state_description: {
                t: 0,
                b: {
                    t: 2,
                    i: [{
                        t: 3
                    }],
                    s: "You do not have any transactions"
                }
            }
        }
    },
    replacement_screen: {
        page_title: {
            t: 0,
            b: {
                t: 2,
                i: [{
                    t: 3
                }],
                s: "Professional Reassignment"
            }
        },
        booking_details: {
            t: 0,
            b: {
                t: 2,
                i: [{
                    t: 3
                }],
                s: "Your booking details"
            }
        },
        regular_unavailable: {
            t: 0,
            b: {
                t: 2,
                i: [{
                    t: 3
                }],
                s: "Since your regular professional is unavailable, we've assigned a new top-rated expert."
            }
        },
        replacement_choose_action: {
            t: 0,
            b: {
                t: 2,
                i: [{
                    t: 3
                }],
                s: "Please choose the action you’d like to take"
            }
        },
        appointment_changed: {
            t: 0,
            b: {
                t: 2,
                i: [{
                    t: 3
                }],
                s: "Your replacement has been confirmed successfully!"
            }
        },
        why_not_change: {
            t: 0,
            b: {
                t: 2,
                i: [{
                    t: 3
                }],
                s: "Why don't you change your professional?"
            }
        },
        why_not_reschedule: {
            t: 0,
            b: {
                t: 2,
                i: [{
                    t: 3
                }],
                s: "Why don't you reschedule your booking?"
            }
        },
        sure_about_cancel: {
            t: 0,
            b: {
                t: 2,
                i: [{
                    t: 3
                }],
                s: "Are you sure you want to cancel this booking?"
            }
        },
        about_to_cancel: {
            t: 0,
            b: {
                t: 2,
                i: [{
                    t: 3
                }],
                s: "You are about to cancel your booking, but we would still love to serve you. If you prefer, you can select another professional for your scheduled booking"
            }
        },
        about_to_cancel_no_reschedule: {
            t: 0,
            b: {
                t: 2,
                i: [{
                    t: 3
                }],
                s: "If you still want to cancel your booking, please use the cancel button below."
            }
        },
        select_another: {
            t: 0,
            b: {
                t: 2,
                i: [{
                    t: 3
                }],
                s: "Select another professional"
            }
        },
        your_professional: {
            t: 0,
            b: {
                t: 2,
                i: [{
                    t: 3
                }],
                s: "Your Professional"
            }
        },
        exit_modal_title: {
            t: 0,
            b: {
                t: 2,
                i: [{
                    t: 3
                }],
                s: "Are you sure?"
            }
        },
        if_you_close: {
            t: 0,
            b: {
                t: 2,
                i: [{
                    t: 3
                }],
                s: "If you exit without making a selection, the new professional will be assigned and scheduled for your appointments."
            }
        },
        exit_modal_confirm: {
            t: 0,
            b: {
                t: 2,
                i: [{
                    t: 3
                }],
                s: "Confirm new professional"
            }
        },
        exit_modal_back: {
            t: 0,
            b: {
                t: 2,
                i: [{
                    t: 3
                }],
                s: "Close"
            }
        },
        assigned_professionals: {
            t: 0,
            b: {
                t: 2,
                i: [{
                    t: 3
                }],
                s: "Assigned Professionals"
            }
        },
        custom_cancel_action_name: {
            t: 0,
            b: {
                t: 2,
                i: [{
                    t: 3
                }],
                s: "Cancel my bookings"
            }
        },
        about_to_cancel_change_available: {
            t: 0,
            b: {
                t: 2,
                i: [{
                    t: 3
                }],
                s: "You are about to cancel your booking, but we would still love to serve you. If you prefer, you can select another professional for your scheduled booking"
            }
        },
        about_to_cancel_all_no_change: {
            t: 0,
            b: {
                t: 2,
                i: [{
                    t: 3
                }],
                s: "You are about to cancel all your weekly bookings. If you still want to proceed, please click cancel button below."
            }
        },
        change_prof_list_modal_title: {
            t: 0,
            b: {
                t: 2,
                i: [{
                    t: 3
                }],
                s: "Change Assigned Professional"
            }
        },
        change_prof_list_modal_title_careem: {
            t: 0,
            b: {
                t: 2,
                i: [{
                    t: 3
                }],
                s: "Choose another professional"
            }
        },
        change_screen_title: {
            t: 0,
            b: {
                t: 2,
                i: [{
                    t: 3
                }],
                s: "Select Another Professional"
            }
        },
        cancel_weekly: {
            t: 0,
            b: {
                t: 2,
                i: [{
                    t: 3
                }],
                s: "Cancel Weekly Bookings"
            }
        },
        pause_weekly: {
            t: 0,
            b: {
                t: 2,
                i: [{
                    t: 3
                }],
                s: "Pause Weekly Bookings"
            }
        },
        contract_details: {
            title: {
                t: 0,
                b: {
                    t: 2,
                    i: [{
                        t: 3,
                        v: "Your scheduled professional is unavailable on "
                    }, {
                        t: 4,
                        k: "date"
                    }]
                }
            },
            subtitle: {
                t: 0,
                b: {
                    t: 2,
                    i: [{
                        t: 3
                    }],
                    s: "Please click view professional replacement to take an action"
                }
            },
            redirect_button: {
                t: 0,
                b: {
                    t: 2,
                    i: [{
                        t: 3
                    }],
                    s: "View Professional Replacement"
                }
            }
        }
    },
    pause_contract: {
        can_pause: {
            t: 0,
            b: {
                t: 2,
                i: [{
                    t: 3
                }],
                s: "You can now pause today and future bookings as per your availability."
            }
        },
        from: {
            t: 0,
            b: {
                t: 2,
                i: [{
                    t: 3
                }],
                s: "From"
            }
        },
        to: {
            t: 0,
            b: {
                t: 2,
                i: [{
                    t: 3
                }],
                s: "To"
            }
        },
        select_date: {
            t: 0,
            b: {
                t: 2,
                i: [{
                    t: 3
                }],
                s: "Select Date"
            }
        },
        calendar_modal_from_title: {
            t: 0,
            b: {
                t: 2,
                i: [{
                    t: 3
                }],
                s: "Select From Date"
            }
        },
        calendar_modal_to_title: {
            t: 0,
            b: {
                t: 2,
                i: [{
                    t: 3
                }],
                s: "Select To Date"
            }
        },
        pause_warning: {
            t: 0,
            b: {
                t: 2,
                i: [{
                    t: 3,
                    v: "You can pause up to "
                }, {
                    t: 4,
                    k: "days"
                }, {
                    t: 3,
                    v: " days"
                }]
            }
        },
        between_dates: {
            t: 0,
            b: {
                t: 2,
                i: [{
                    t: 3,
                    v: "Any scheduled bookings between "
                }, {
                    t: 4,
                    k: "startDate"
                }, {
                    t: 3,
                    v: " and "
                }, {
                    t: 4,
                    k: "endDate"
                }, {
                    t: 3,
                    v: " will be paused. Your schedule will automatically resume after "
                }, {
                    t: 4,
                    k: "endDate"
                }, {
                    t: 3,
                    v: "."
                }]
            }
        },
        cannot_undo: {
            t: 0,
            b: {
                t: 2,
                i: [{
                    t: 3
                }],
                s: "This action cannot be undone once you click confirm pause."
            }
        },
        confirm_pause: {
            t: 0,
            b: {
                t: 2,
                i: [{
                    t: 3
                }],
                s: "Confirm Pause"
            }
        },
        till: {
            t: 0,
            b: {
                t: 2,
                i: [{
                    t: 3
                }],
                s: "Till"
            }
        }
    },
    contract_cancellation: {
        modal_title: {
            t: 0,
            b: {
                t: 2,
                i: [{
                    t: 3
                }],
                s: "Don't miss out on your exclusive benefits!"
            }
        },
        guaranteed_professional_title: {
            t: 0,
            b: {
                t: 2,
                i: [{
                    t: 3
                }],
                s: "Guaranteed favorite professional!"
            }
        },
        guaranteed_professional_desc: {
            t: 0,
            b: {
                t: 2,
                i: [{
                    t: 3
                }],
                s: "You will be served by your favorite professional for your entire schedule!"
            }
        },
        no_hassle_title: {
            t: 0,
            b: {
                t: 2,
                i: [{
                    t: 3
                }],
                s: "No hassle of individual bookings!"
            }
        },
        no_hassle_desc: {
            t: 0,
            b: {
                t: 2,
                i: [{
                    t: 3
                }],
                s: "Customize your appointments by selecting your preferred day, time slot, and professional!"
            }
        },
        discount_title: {
            t: 0,
            b: {
                t: 2,
                i: [{
                    t: 4,
                    k: "amount"
                }, {
                    t: 3,
                    v: " Discount!"
                }]
            }
        },
        discount_desc: {
            t: 0,
            b: {
                t: 2,
                i: [{
                    t: 3
                }],
                s: "The offer will no longer be valid once appointments are canceled."
            }
        },
        keep_weekly: {
            t: 0,
            b: {
                t: 2,
                i: [{
                    t: 3
                }],
                s: "Keep Weekly Bookings"
            }
        },
        cancel_weekly: {
            t: 0,
            b: {
                t: 2,
                i: [{
                    t: 3
                }],
                s: "Cancel All Weekly Bookings"
            }
        },
        update_appointment_title: {
            t: 0,
            b: {
                t: 2,
                i: [{
                    t: 3
                }],
                s: "Would you like to update your appointment?"
            }
        },
        update_appointment_desc: {
            t: 0,
            b: {
                t: 2,
                i: [{
                    t: 3
                }],
                s: "Please don't hesitate to contact our live chat support line using the provided option. We will be delighted to assist you with updating your appointment details."
            }
        },
        pause_instead_title: {
            t: 0,
            b: {
                t: 2,
                i: [{
                    t: 3
                }],
                s: "Do you want to pause your bookings?"
            }
        },
        pause_instead_desc: {
            t: 0,
            b: {
                t: 2,
                i: [{
                    t: 3
                }],
                s: "If you need to temporarily suspend your bookings, you have the option to pause them for a specific duration."
            }
        },
        pause_instead_primary: {
            t: 0,
            b: {
                t: 2,
                i: [{
                    t: 3
                }],
                s: "Pause Bookings"
            }
        },
        other_title: {
            t: 0,
            b: {
                t: 2,
                i: [{
                    t: 3
                }],
                s: "Let's Make it Better!"
            }
        },
        other_desc: {
            t: 0,
            b: {
                t: 2,
                i: [{
                    t: 3
                }],
                s: "We’d hate to see you go. Please reach out using the contact options below. We'd love to resolve any issues you're facing."
            }
        },
        change_prof_instead_desc: {
            t: 0,
            b: {
                t: 2,
                i: [{
                    t: 3
                }],
                s: "Your comfort and satisfaction are our top priority, and we want to regain your trust."
            }
        }
    },
    contract_details: {
        will_be_created: {
            t: 0,
            b: {
                t: 2,
                i: [{
                    t: 3
                }],
                s: "Your booking will be automatically created"
            }
        },
        contract_cancelled: {
            t: 0,
            b: {
                t: 2,
                i: [{
                    t: 3
                }],
                s: "Your booking has been canceled successfully"
            }
        },
        manage_weekly: {
            t: 0,
            b: {
                t: 2,
                i: [{
                    t: 3
                }],
                s: "Manage weekly bookings"
            }
        },
        save_for_one: {
            t: 0,
            b: {
                t: 2,
                i: [{
                    t: 3
                }],
                s: "Save for this booking"
            }
        },
        save_for_all: {
            t: 0,
            b: {
                t: 2,
                i: [{
                    t: 3
                }],
                s: "Save for all bookings"
            }
        },
        paused_between_left: {
            t: 0,
            b: {
                t: 2,
                i: [{
                    t: 3
                }],
                s: "You paused bookings between "
            }
        },
        paused_between_right: {
            t: 0,
            b: {
                t: 2,
                i: [{
                    t: 4,
                    k: "startDate"
                }, {
                    t: 3,
                    v: " - "
                }, {
                    t: 4,
                    k: "endDate"
                }, {
                    t: 3,
                    v: "."
                }]
            }
        }
    },
    alerts: {
        apple_pay_error: {
            t: 0,
            b: {
                t: 2,
                i: [{
                    t: 3
                }],
                s: "Apple Pay is currently unavailable. Please choose a different payment method"
            }
        },
        careem_login_error: {
            t: 0,
            b: {
                t: 2,
                i: [{
                    t: 3
                }],
                s: "Page hiccup! Please relaunch your app."
            }
        }
    },
    careem_location_picker: {
        title: {
            t: 0,
            b: {
                t: 2,
                i: [{
                    t: 3
                }],
                s: "Select Address"
            }
        },
        subtitle: {
            t: 0,
            b: {
                static: "",
                t: 2,
                i: []
            }
        }
    },
    globalLocationsInvalidAddress: {
        title: {
            t: 0,
            b: {
                t: 2,
                i: [{
                    t: 3
                }],
                s: "We’re unavailable in this area!"
            }
        },
        description: {
            t: 0,
            b: {
                t: 2,
                i: [{
                    t: 3
                }],
                s: "Sorry! We are currently unavailable here. Please select another address."
            }
        },
        button: {
            t: 0,
            b: {
                t: 2,
                i: [{
                    t: 3
                }],
                s: "Select another address"
            }
        },
        countryErrorTitle: {
            t: 0,
            b: {
                t: 2,
                i: [{
                    t: 3,
                    v: "Address Outside of "
                }, {
                    t: 4,
                    k: "country"
                }]
            }
        },
        countryErrorDescription: {
            t: 0,
            b: {
                t: 2,
                i: [{
                    t: 3,
                    v: "Please select an address from "
                }, {
                    t: 4,
                    k: "country"
                }, {
                    t: 3,
                    v: " to proceed."
                }]
            }
        }
    },
    policyModal: {
        title: {
            t: 0,
            b: {
                t: 2,
                i: [{
                    t: 3
                }],
                s: "Our Policy"
            }
        },
        sub_title: {
            t: 0,
            b: {
                t: 2,
                i: [{
                    t: 3
                }],
                s: "Cancellation and rescheduling policy"
            }
        },
        table: {
            type: {
                t: 0,
                b: {
                    t: 2,
                    i: [{
                        t: 3
                    }],
                    s: "Type"
                }
            },
            cancellation_fee: {
                t: 0,
                b: {
                    t: 2,
                    i: [{
                        t: 3
                    }],
                    s: "Cancellation Fee"
                }
            },
            reschedule_fee: {
                t: 0,
                b: {
                    t: 2,
                    i: [{
                        t: 3
                    }],
                    s: "Reschedule Fee"
                }
            },
            row1_c1: {
                t: 0,
                b: {
                    t: 2,
                    i: [{
                        t: 3
                    }],
                    s: "15 minutes after placing the request"
                }
            },
            row2_c1: {
                t: 0,
                b: {
                    t: 2,
                    i: [{
                        t: 3
                    }],
                    s: "6+ hours before the booking"
                }
            },
            row3_c1: {
                t: 0,
                b: {
                    t: 2,
                    i: [{
                        t: 3
                    }],
                    s: "2-6 hours before the booking"
                }
            },
            row4_c1: {
                t: 0,
                b: {
                    t: 2,
                    i: [{
                        t: 3
                    }],
                    s: "Less than 2 hours before the booking"
                }
            },
            row5_c1: {
                t: 0,
                b: {
                    t: 2,
                    i: [{
                        t: 3
                    }],
                    s: "After start time"
                }
            },
            free_of_charge: {
                t: 0,
                b: {
                    t: 2,
                    i: [{
                        t: 3
                    }],
                    s: "Free of charge"
                }
            },
            twenty_five_percent: {
                t: 0,
                b: {
                    t: 2,
                    i: [{
                        t: 3
                    }],
                    s: "25% of the booking value"
                }
            },
            fifty_percent: {
                t: 0,
                b: {
                    t: 2,
                    i: [{
                        t: 3
                    }],
                    s: "50% of the booking value"
                }
            },
            hundred_percent: {
                t: 0,
                b: {
                    t: 2,
                    i: [{
                        t: 3
                    }],
                    s: "100% of the booking value"
                }
            }
        },
        ksa_package_table: {
            type: {
                t: 0,
                b: {
                    t: 2,
                    i: [{
                        t: 3
                    }],
                    s: "Type"
                }
            },
            cancellation_fee: {
                t: 0,
                b: {
                    t: 2,
                    i: [{
                        t: 3
                    }],
                    s: "Cancellation Fee"
                }
            },
            reschedule_fee: {
                t: 0,
                b: {
                    t: 2,
                    i: [{
                        t: 3
                    }],
                    s: "Reschedule Fee"
                }
            },
            row1_c1: {
                t: 0,
                b: {
                    t: 2,
                    i: [{
                        t: 3
                    }],
                    s: "6+ hours before the booking"
                }
            },
            row2_c1: {
                t: 0,
                b: {
                    t: 2,
                    i: [{
                        t: 3
                    }],
                    s: "0-6 hours before the booking"
                }
            },
            row3_c1: {
                t: 0,
                b: {
                    t: 2,
                    i: [{
                        t: 3
                    }],
                    s: "Missed booking"
                }
            },
            session_drop: {
                t: 0,
                b: {
                    t: 2,
                    i: [{
                        t: 3
                    }],
                    s: "Session Drop"
                }
            },
            free_of_charge: {
                t: 0,
                b: {
                    t: 2,
                    i: [{
                        t: 3
                    }],
                    s: "Free of charge"
                }
            },
            twenty_five_percent: {
                t: 0,
                b: {
                    t: 2,
                    i: [{
                        t: 3
                    }],
                    s: "25% of the booking value"
                }
            },
            fifty_percent: {
                t: 0,
                b: {
                    t: 2,
                    i: [{
                        t: 3
                    }],
                    s: "50% of the booking value"
                }
            },
            hundred_percent: {
                t: 0,
                b: {
                    t: 2,
                    i: [{
                        t: 3
                    }],
                    s: "100% of the booking value"
                }
            }
        },
        notes: {
            cash_max_reschedule: {
                t: 0,
                b: {
                    t: 2,
                    i: [{
                        t: 3
                    }],
                    s: "You can reschedule a cash-paid booking up to two times."
                }
            }
        }
    },
    rescheduleLimit: {
        title: {
            t: 0,
            b: {
                t: 2,
                i: [{
                    t: 3
                }],
                s: "Rescheduling Limit Reached"
            }
        },
        content: {
            t: 0,
            b: {
                t: 2,
                i: [{
                    t: 3
                }],
                s: "Oops, looks like you've hit the rescheduling jackpot! You've reached your limit for changing the booking."
            }
        },
        primaryButtonText: {
            t: 0,
            b: {
                t: 2,
                i: [{
                    t: 3
                }],
                s: "Cancel the booking"
            }
        },
        secondaryButtonText: {
            t: 0,
            b: {
                t: 2,
                i: [{
                    t: 3
                }],
                s: "Go back"
            }
        }
    },
    home_cleaning: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Home Cleaning"
        }
    },
    prof: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "professional"
        }
    },
    profs: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "professionals"
        }
    },
    with_material: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "with cleaning material"
        }
    },
    without_material: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "without cleaning material"
        }
    },
    next_step: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Next step"
        }
    },
    edit_my_booking: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Edit my booking"
        }
    },
    select_an_option: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Please select an option"
        }
    },
    pick_one_below_or_close: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Pick one of the options below, or click the close button to go back."
        }
    },
    click_one_to_switch_prof: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "If you'd like to switch professionals, just click on the one you prefer for the specified date and time."
        }
    },
    hang_tight: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Hang Tight!"
        }
    },
    could_not_load_replacement: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "We couldn't load the professional replacement. Please try again soon!"
        }
    },
    professional_s: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Professional(s)"
        }
    },
    duration_per_visit: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Duration per visit"
        }
    },
    service_schedule: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Service Schedule"
        }
    },
    visits_per_week_for_month: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 4,
                k: "visits"
            }, {
                t: 3,
                v: " visit(s) per week for "
            }, {
                t: 4,
                k: "months"
            }, {
                t: 3,
                v: " month(s)"
            }]
        }
    },
    no_package_refund_after_first_sub: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "You can cancel your package even if you complete your booking, but please note that no refunds will be issued."
        }
    },
    details_bare: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Details"
        }
    },
    service_duration_and_schedule: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Service Duration and Schedule"
        }
    },
    service_takes_n_hours: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3,
                v: "Service will take approximately "
            }, {
                t: 4,
                k: "hours"
            }, {
                t: 3,
                v: " hours."
            }]
        }
    },
    professional_change_information: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Professional Change Information"
        }
    },
    regular_prof_unavailable: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3,
                v: "Your regular professional, "
            }, {
                t: 4,
                k: "cleanerName"
            }, {
                t: 3,
                v: ", is unavailable at the selected time."
            }]
        }
    },
    manage_my_booking: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Manage My Booking"
        }
    },
    change_preferred_professional: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Change Preferred Professional"
        }
    },
    next_available_time: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Next available time"
        }
    },
    hold_up: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Hold Up!"
        }
    },
    your_tip_amount: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Your Tip Amount"
        }
    },
    pay_tip: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Pay Tip"
        }
    },
    tip_professional: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Tip Professional"
        }
    },
    enter_amount: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Enter Amount"
        }
    },
    tip_amount_warning: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3,
                v: "The minimum amount is "
            }, {
                t: 4,
                k: "amount"
            }]
        }
    },
    tip_button_text: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3,
                v: "Tip "
            }, {
                t: 4,
                k: "amount"
            }]
        }
    },
    tip_description_single_professional: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Say thanks with a kind tip! The entire tip goes straight to your professional!"
        }
    },
    tip_description_multiple_professional: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Say thanks by leaving a tip! The tip is divided equally among the professionals who served you."
        }
    },
    two_professional_name: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 4,
                k: "professional1"
            }, {
                t: 3,
                v: " and "
            }, {
                t: 4,
                k: "professional2"
            }]
        }
    },
    share_professional_title: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Share Professional"
        }
    },
    professional_rating: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Rating"
        }
    },
    professional_reviews: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Reviews"
        }
    },
    professional_booked: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Booked"
        }
    },
    favorites_main_title: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Favorites"
        }
    },
    favorites_categories: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Categories"
        }
    },
    favorites_services: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Services"
        }
    },
    share_professional_content: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Recommend your favorite professional to your friends or family or save them to your favorites list to book easily next time."
        }
    },
    save_to_favorites: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Save to Favorites"
        }
    },
    favorited: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Favorited"
        }
    },
    favorites_professionals: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Professionals"
        }
    },
    favorites_category_empty_title: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "No Favorite Services"
        }
    },
    favorites_category_empty_description: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Tap the heart icon on the service detail page to add a service to your favorites."
        }
    },
    favorites_services_empty_title: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "No Favorite Service Items"
        }
    },
    favorites_services_empty_description: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "To add a service item to your favorites, tap the heart icon displayed at the top corner of the service details page."
        }
    },
    favorites_professionals_empty_title: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "No Favorite Professionals"
        }
    },
    favorites_professionals_empty_description: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Tap the heart icon on the professional detail page to add a professional to your favorites."
        }
    },
    favorites_favorite_message: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 4,
                k: "service_type"
            }, {
                t: 3,
                v: " was successfully added to your favorites"
            }]
        }
    },
    favorites_unfavorite_message: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 4,
                k: "service_type"
            }, {
                t: 3,
                v: " was successfully removed from your favorites"
            }]
        }
    },
    favorites_service_unavailable_title: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Service Unavailable"
        }
    },
    favorites_service_unavailable_description: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3,
                v: "This service isn’t offered at "
            }, {
                t: 4,
                k: "address"
            }, {
                t: 3,
                v: ". Try another address or service option."
            }]
        }
    },
    warning_modal_button: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Got It"
        }
    },
    flex_search_box_placeholder: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3,
                v: "Search in "
            }, {
                t: 4,
                k: "funnelName"
            }]
        }
    },
    results_for: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Results for "
        }
    },
    cancel_camel_case: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Cancel"
        }
    },
    no_search_result_error: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3,
                v: "We couldn't find anything for ‘"
            }, {
                t: 4,
                k: "searchQuery"
            }, {
                t: 3,
                v: "‘"
            }]
        }
    },
    no_search_result_warning: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Check the spelling or try another search"
        }
    },
    call_me_back_title: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Confirm Your Request"
        }
    },
    call_me_back_description: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Would you like to request a callback from our Customer Support team?"
        }
    },
    call_me_back_success_response_title: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Request Submitted!"
        }
    },
    call_me_back_success_response_description: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Our team has received your request. A Customer Support representative will call you shortly."
        }
    },
    confirm_button: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Confirm"
        }
    },
    cancel_button: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Cancel"
        }
    },
    search_box_placeholder_1: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: 'Search for "Massage"'
        }
    },
    search_box_placeholder_2: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: 'Search for "Home Cleaning"'
        }
    },
    search_box_placeholder_3: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: 'Search for "Car Wash"'
        }
    },
    search_box_placeholder_4: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: 'Search for "Dry Cleaning"'
        }
    },
    search_box_placeholder_5: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: 'Search for "Blow Dry"'
        }
    },
    recent_searches: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Recent Searches"
        }
    },
    popular_searches: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Popular Searches"
        }
    },
    top_services_for_you: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Top services for you"
        }
    },
    clear: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Clear"
        }
    },
    mins: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Mins"
        }
    },
    how_to_book_step: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Step"
        }
    },
    service_reviews_overall_rating: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Overall rating"
        }
    },
    service_reviews_reviews: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Reviews"
        }
    },
    track_professional: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Track Professional"
        }
    },
    we_will_arrive_between: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "We'll arrive between"
        }
    },
    booking_start_time_is: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Booking start time is"
        }
    },
    freshchat_csat_question: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Would you like to rate your chat with our agent?"
        }
    },
    cpay_bottomsheet_cta: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Book now"
        }
    },
    sitemap: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Sitemap"
        }
    },
    careem_update_required: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Please update your Careem app to continue enjoying home services without interruptions."
        }
    },
    default_address: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Default address"
        }
    },
    your_default_address_has_been_changed: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Your default address has been changed."
        }
    },
    request_call_back: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Request Call Back"
        }
    },
    request_call_back_success_message: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Your request has been submitted successfully. We’ll be in touch soon."
        }
    },
    an_exclusive_offer_for_you: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "An Exclusive Offer Just for You!"
        }
    },
    continue_with_discount: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Continue with Discount"
        }
    },
    promotional_discount_success: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3,
                v: "You got "
            }, {
                t: 4,
                k: "amount"
            }, {
                t: 3,
                v: " discount, enjoy!"
            }]
        }
    },
    you_seem_far_away: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Is this the right address? It seems like you're a bit far away"
        }
    },
    exclusive_offer_for_you: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Exclusive offer for you!"
        }
    },
    code_with_voucher_code: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3,
                v: "Code: "
            }, {
                t: 4,
                k: "voucherCode"
            }]
        }
    },
    remove: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Remove"
        }
    },
    voucher_details: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Voucher Details"
        }
    },
    okay: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Okay"
        }
    },
    total_inc_vat: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Total (inc. VAT)"
        }
    },
    min_one_item_for_voucher_error: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Oops! You need at least one item in your basket to use a voucher."
        }
    },
    tabby_installments: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "4 interest-free instalments-no extra fees."
        }
    },
    tabby: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Tabby"
        }
    },
    pay_later_with_tabby: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Pay later with Tabby"
        }
    },
    tabby_description: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Pay in 4 interest-free payments."
        }
    },
    checkout_tabby_description: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Enjoy interest-free installments through Tabby’s secure checkout."
        }
    },
    payment_method_minimum_amount_error: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3,
                v: "Applies to orders above "
            }, {
                t: 4,
                k: "amount"
            }]
        }
    },
    which_days_prefer: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Which days do you prefer?"
        }
    },
    multi_day_discount_info: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3,
                v: "Congrats! You saved <strong>"
            }, {
                t: 4,
                k: "percentage"
            }, {
                t: 3,
                v: "%</assets-local/bd0188b5c32d91f9.binassets-local/assets-local/bd0188b5c32d91f9.binbd0188b5c32d91f9.binassets-local/assets-local/bd0188b5c32d91f9.binassets-local/assets-local/bd0188b5c32d91f9.binbd0188b5c32d91f9.binbd0188b5c32d91f9.binstrong> by choosing "
            }, {
                t: 4,
                k: "days"
            }, {
                t: 3,
                v: " days."
            }]
        }
    },
    justlife_promise: {
        title_v1: {
            t: 0,
            b: {
                t: 2,
                i: [{
                    t: 3
                }],
                s: "More Days, More Savings!"
            }
        },
        title_v2: {
            t: 0,
            b: {
                t: 2,
                i: [{
                    t: 3
                }],
                s: "Reschedule or Cancel Anytime"
            }
        },
        title_v3: {
            t: 0,
            b: {
                t: 2,
                i: [{
                    t: 3
                }],
                s: "Same Professional Guaranteed"
            }
        },
        title_v4: {
            t: 0,
            b: {
                t: 2,
                i: [{
                    t: 3
                }],
                s: "Pause or Cancel Anytime"
            }
        },
        title_v5: {
            t: 0,
            b: {
                t: 2,
                i: [{
                    t: 3
                }],
                s: "Any Mess, Any Time"
            }
        },
        title_v6: {
            t: 0,
            b: {
                t: 2,
                i: [{
                    t: 3
                }],
                s: "Book Instantly, Stay Flexible"
            }
        },
        title_v7: {
            t: 0,
            b: {
                t: 2,
                i: [{
                    t: 3
                }],
                s: "Savings, On Repeat"
            }
        },
        description_v1: {
            t: 0,
            b: {
                t: 2,
                i: [{
                    t: 3
                }],
                s: "Select more days to save up to 25%."
            }
        },
        description_v2: {
            t: 0,
            b: {
                t: 2,
                i: [{
                    t: 3
                }],
                s: "Total flexibility at your fingertips!"
            }
        },
        description_v3: {
            t: 0,
            b: {
                t: 2,
                i: [{
                    t: 3
                }],
                s: "No changes, no excuses, same professional every time."
            }
        },
        description_v4: {
            t: 0,
            b: {
                t: 2,
                i: [{
                    t: 3
                }],
                s: "Total flexibility at your fingertips!"
            }
        },
        description_v5: {
            t: 0,
            b: {
                t: 2,
                i: [{
                    t: 3
                }],
                s: "Top-rated professionals, ready when you need them."
            }
        },
        description_v6: {
            t: 0,
            b: {
                t: 2,
                i: [{
                    t: 3
                }],
                s: "Multiple slots available with no commitment."
            }
        },
        description_v7: {
            t: 0,
            b: {
                t: 2,
                i: [{
                    t: 3
                }],
                s: "Choose more days & watch the savings roll in."
            }
        }
    },
    select_multi_day: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Select multi day"
        }
    },
    select_one_more_day: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Select 1 more"
        }
    },
    max_days: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Max. days"
        }
    },
    max_selected_days: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Max. selected days"
        }
    },
    multi_times_every_week: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Multiple Times a Week"
        }
    },
    when_would_you_like_to_start: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "When would you like to start?"
        }
    },
    select_a_start_time_for_the_chosen_days: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Select a start time for the chosen days."
        }
    },
    promise: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Promise"
        }
    },
    valid_for_each_selection: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Valid for each session."
        }
    },
    multi_day_each_session_description: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "The amount will be reserved on your card and charged after the session."
        }
    },
    multi_day_each_session_description_careem: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "The amount will be reserved on your card and charged before the session."
        }
    },
    refunded_credits: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Refunded Credits🎉"
        }
    },
    refunded_credits_description: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "As promised, your credits have been refunded after replacing your professional. Start using them right away!"
        }
    },
    check_credits: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Check Credits"
        }
    },
    each: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Each"
        }
    },
    up_to_25_off: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Up to 25% off"
        }
    },
    contact_us: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Contact Us"
        }
    },
    get_in_touch: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Get in Touch with Us"
        }
    },
    email_us: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Email Us:"
        }
    },
    social_media: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Social Media:"
        }
    },
    contact_us_main_content: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "We're here to help! If you have any questions, or comments, or just want to say hello, our team is ready to listen! Reach out to us through any of the methods below, and we'll make sure to get back to you as soon as possible."
        }
    },
    contact_us_email_content: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3,
                v: "Drop us a line at "
            }, {
                t: 4,
                k: "mail"
            }, {
                t: 3,
                v: ", and we'll get back to you within one business day."
            }]
        }
    },
    contact_us_social_media_content: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Connect with us on our social channels for the latest updates, tips, and offers."
        }
    },
    service_areas: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Service Areas"
        }
    },
    services: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Services"
        }
    },
    faq_long: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Frequently asked questions"
        }
    },
    faq_short_dots: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "F.A.Q"
        }
    },
    footer_section_faq_desc: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Learn everything you need about Justlife UAE. Part time maids service is a more affordable way of having your home cleaned. Enjoy Justlife Experience."
        }
    },
    terms: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Terms"
        }
    },
    privacy: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Privacy"
        }
    },
    blog: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Blog"
        }
    },
    career: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Career"
        }
    },
    our_services: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "OUR SERVICES"
        }
    },
    reschedule_this_booking: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Reschedule This Booking"
        }
    },
    cancel_this_booking: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Cancel This Booking"
        }
    },
    go_back: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Go Back"
        }
    },
    reschedule_option: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Reschedule Option"
        }
    },
    cancellation_option: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Cancellation Option"
        }
    },
    reschedule_after_start_body_1: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "We’re sorry we couldn’t serve you as planned. 🙏 Reschedule your session at a time that suits you, and once it’s done, we’ll add "
        }
    },
    reschedule_after_start_body_2: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: " credit to your account."
        }
    },
    cancel_after_start_modal_body_1: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "We’re sorry we couldn’t provide the service and saw you’d like to cancel. Reschedule your session instead, and once it’s completed, we’ll add "
        }
    },
    cancel_after_start_modal_body_2: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: " credit to your account."
        }
    },
    cancel_after_start_body_1: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "We’re sorry to see you cancel your session. Your payment will be fully refunded, and as a gesture of apology, we’ll credit "
        }
    },
    cancel_after_start_body_2: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: " of your booking value to your account."
        }
    },
    error_occurred: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "An error occurred"
        }
    },
    checkout_form_load_error: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: `Couldn't load the "Add New Card" form. Please try again.`
        }
    },
    action_required: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Action Required"
        }
    },
    confirm_your_new_time: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Confirm Your New Time"
        }
    },
    date_and_time: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Date & Time"
        }
    },
    new_date_and_time: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "New Date & Time"
        }
    },
    not_answered_offer_message: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3,
                v: "Review and confirm the new time slot to enjoy your "
            }, {
                t: 4,
                k: "amount"
            }, {
                t: 3,
                v: " discount!"
            }]
        }
    },
    not_answered_exit_modal_title: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Are you sure you want to cancel?"
        }
    },
    not_answered_exit_modal_warning_message: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3,
                v: "You can still get your <strong>"
            }, {
                t: 4,
                k: "amount"
            }, {
                t: 3,
                v: "</assets-local/bd0188b5c32d91f9.binassets-local/assets-local/bd0188b5c32d91f9.binbd0188b5c32d91f9.binassets-local/assets-local/bd0188b5c32d91f9.binassets-local/assets-local/bd0188b5c32d91f9.binbd0188b5c32d91f9.binbd0188b5c32d91f9.binstrong> discount by selecting a new time slot!"
            }]
        }
    },
    back: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Back"
        }
    },
    cancel_booking: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Cancel Booking"
        }
    },
    not_answered_warning_message: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3,
                v: "Apologies! We’re unable to serve your booking at the original time. You can reschedule for a new time that suits you and receive <strong>"
            }, {
                t: 4,
                k: "amount"
            }, {
                t: 3,
                v: " Off!</assets-local/bd0188b5c32d91f9.binassets-local/assets-local/bd0188b5c32d91f9.binbd0188b5c32d91f9.binassets-local/assets-local/bd0188b5c32d91f9.binassets-local/assets-local/bd0188b5c32d91f9.binbd0188b5c32d91f9.binbd0188b5c32d91f9.binstrong> 💸"
            }]
        }
    },
    not_answered_warning_message_careem: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3,
                v: 'Apologies! We’re unable to serve your booking at the original time. You can reschedule for a new time that suits you and receive <strong class="c-text-brand-promotion">'
            }, {
                t: 4,
                k: "amount"
            }, {
                t: 3,
                v: " Off</assets-local/bd0188b5c32d91f9.binassets-local/assets-local/bd0188b5c32d91f9.binbd0188b5c32d91f9.binassets-local/assets-local/bd0188b5c32d91f9.binassets-local/assets-local/bd0188b5c32d91f9.binbd0188b5c32d91f9.binbd0188b5c32d91f9.binstrong> 💸"
            }]
        }
    },
    no_cancellation_charges: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "There will be no cancellation charges or any penalties for any changes on this booking due to unavailability of the professional."
        }
    },
    top_rated_professionals: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Top-Rated Professionals"
        }
    },
    appointment_updated_success: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Appointment has been updated successfully!"
        }
    },
    subscription_policy_renewal_title: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Renewal & Payments"
        }
    },
    subscription_policy_renewal_text_1: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Your plan automatically renews at the end of each term (1-month or 3-month) unless you cancel ahead of renewal."
        }
    },
    subscription_policy_renewal_text_2: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Renewal will be charged on your saved payment method, whether card or Tabby."
        }
    },
    subscription_policy_renewal_text_3_html: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: 'You can manage or cancel anytime under <span class="f-helper inline-block">Account → My Subscriptions</assets-local/bd0188b5c32d91f9.binassets-local/assets-local/bd0188b5c32d91f9.binbd0188b5c32d91f9.binassets-local/assets-local/bd0188b5c32d91f9.binassets-local/assets-local/bd0188b5c32d91f9.binbd0188b5c32d91f9.binbd0188b5c32d91f9.binspan>.'
        }
    },
    subscription_policy_reschedule_title: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Rescheduling"
        }
    },
    subscription_policy_reschedule_label_1: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "When:"
        }
    },
    subscription_policy_reschedule_text_1_html: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: 'You can move any visit to another slot within <span class="bold">7 days</assets-local/bd0188b5c32d91f9.binassets-local/assets-local/bd0188b5c32d91f9.binbd0188b5c32d91f9.binassets-local/assets-local/bd0188b5c32d91f9.binassets-local/assets-local/bd0188b5c32d91f9.binbd0188b5c32d91f9.binbd0188b5c32d91f9.binspan> of the original date.'
        }
    },
    subscription_policy_reschedule_label_2: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Cut-off:"
        }
    },
    subscription_policy_reschedule_text_2_html: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: 'Rescheduling must take place <span class="bold">6 hours</assets-local/bd0188b5c32d91f9.binassets-local/assets-local/bd0188b5c32d91f9.binbd0188b5c32d91f9.binassets-local/assets-local/bd0188b5c32d91f9.binassets-local/assets-local/bd0188b5c32d91f9.binbd0188b5c32d91f9.binbd0188b5c32d91f9.binspan> before the session.'
        }
    },
    subscription_policy_reschedule_table_title: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Limits per package period:"
        }
    },
    subscription_policy_reschedule_table_month: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 4,
                k: "months"
            }, {
                t: 3,
                v: "-Month"
            }]
        }
    },
    subscription_policy_reschedule_table_week: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 4,
                k: "times"
            }, {
                t: 3,
                v: "× per week"
            }]
        }
    },
    subscription_policy_reschedule_table_plan_type: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Plan Type"
        }
    },
    subscription_policy_reschedule_table_frequency: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Frequency"
        }
    },
    subscription_policy_reschedule_table_max_reschedules: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Maximum Reschedules"
        }
    },
    subscription_policy_reschedule_info_text: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "If your usual professional isn’t available, you’ll see alternate options with similar availability."
        }
    },
    subscription_policy_pause_title: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Pause Plan"
        }
    },
    subscription_policy_pause_text_1_html: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: 'You can pause your plan once per package period, for up to <span class="bold">14 days</assets-local/bd0188b5c32d91f9.binassets-local/assets-local/bd0188b5c32d91f9.binbd0188b5c32d91f9.binassets-local/assets-local/bd0188b5c32d91f9.binassets-local/assets-local/bd0188b5c32d91f9.binbd0188b5c32d91f9.binbd0188b5c32d91f9.binspan>.'
        }
    },
    subscription_policy_pause_text_2_html: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Any visits scheduled during the pause are automatically shifted."
        }
    },
    subscription_policy_pause_text_3_html: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Your plan resumes automatically on the date you select."
        }
    },
    subscription_policy_refund_title: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Cancellations & Refunds"
        }
    },
    subscription_policy_refund_text_1_html: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Unused sessions are refunded pro rata based on your package price."
        }
    },
    subscription_policy_refund_text_2_html: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "If you cancel less than 6 hours before the session, the session is forfeited with no refund."
        }
    },
    subscription_policy_refund_text_3_html: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: 'If you’ve completed the minimum required sessions, the refund is <span class="bold">penalty-free</assets-local/bd0188b5c32d91f9.binassets-local/assets-local/bd0188b5c32d91f9.binbd0188b5c32d91f9.binassets-local/assets-local/bd0188b5c32d91f9.binassets-local/assets-local/bd0188b5c32d91f9.binbd0188b5c32d91f9.binbd0188b5c32d91f9.binspan>.'
        }
    },
    subscription_policy_refund_table_title: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "If not, a cancellation fee applies:"
        }
    },
    subscription_policy_refund_table_plan_type: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Plan Type & Frequency"
        }
    },
    subscription_policy_refund_table_min_completed: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Minimum Completed Sessions"
        }
    },
    subscription_policy_refund_table_max_cancellation_fee: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Cancellation Fee"
        }
    },
    subscription_policy_refund_info_text: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "If your refundable amount is less than the cancellation fee, the difference will be charged to your saved card."
        }
    },
    subscription_policy_refund_footer_html: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: 'To cancel, go to <span class="f-helper inline-block">Account → My Subscriptions → Cancel</assets-local/bd0188b5c32d91f9.binassets-local/assets-local/bd0188b5c32d91f9.binbd0188b5c32d91f9.binassets-local/assets-local/bd0188b5c32d91f9.binassets-local/assets-local/bd0188b5c32d91f9.binbd0188b5c32d91f9.binbd0188b5c32d91f9.binspan>.'
        }
    },
    subscription_policy_need_help_title: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Need Help?"
        }
    },
    subscription_policy_need_help_html: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: 'Chat with us directly in Support, or request a call-back via <span class="f-helper inline-block">Account → Help</assets-local/bd0188b5c32d91f9.binassets-local/assets-local/bd0188b5c32d91f9.binbd0188b5c32d91f9.binassets-local/assets-local/bd0188b5c32d91f9.binassets-local/assets-local/bd0188b5c32d91f9.binbd0188b5c32d91f9.binbd0188b5c32d91f9.binspan>.'
        }
    },
    my_schedule: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "My Schedule"
        }
    },
    manage_my_subscription: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Manage My Subscription"
        }
    },
    duration: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Duration"
        }
    },
    material: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Material"
        }
    },
    renewal_date: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Renewal Date"
        }
    },
    t_and_cs: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "T&Cs"
        }
    },
    call_me_back: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Call Me Back"
        }
    },
    create_ticket_success_title: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Request Sent"
        }
    },
    create_ticket_success_message: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Your request has been sent and you will receive a call back shortly."
        }
    },
    create_ticket_error_title: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Unable to Process Request"
        }
    },
    create_ticket_error_message: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Sorry, we're unable to process the request. Please try again later."
        }
    },
    pause_my_subscription: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Pause My Subscription"
        }
    },
    cancel_my_subscription: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Cancel My Subscription"
        }
    },
    only_for_this_booking: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Only for this booking"
        }
    },
    reschedule_maximum_sessions: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3,
                v: "You can reschedule a maximum of "
            }, {
                t: 4,
                k: "count"
            }, {
                t: 3,
                v: " sessions"
            }]
        }
    },
    reschedule_maximum_sessions_info: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3,
                v: "You can reschedule up to "
            }, {
                t: 4,
                k: "count"
            }, {
                t: 3,
                v: " sessions per subscription. Rescheduling is available up to 6 hours before the appointment."
            }]
        }
    },
    reschedule_max_reached: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "You have reached your reschedule limit."
        }
    },
    pause_limit_reached: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "You have reached your pause limit"
        }
    },
    guarantee: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Guarantee"
        }
    },
    weekly_schedule: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Weekly Schedule"
        }
    },
    funnel_auto_renew_info: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3,
                v: "We’ll automatically renew your plan on "
            }, {
                t: 4,
                k: "date"
            }, {
                t: 3,
                v: " with a charge of "
            }, {
                t: 4,
                k: "price"
            }, {
                t: 3,
                v: ". Cancel anytime, free of charge."
            }]
        }
    },
    subscription_footer_text: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 4,
                k: "weeks"
            }, {
                t: 3,
                v: " weeks • "
            }, {
                t: 4,
                k: "sessions"
            }, {
                t: 3,
                v: " sessions"
            }]
        }
    },
    package_type: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Package Type"
        }
    },
    package_type_value_singular: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 4,
                k: "value"
            }, {
                t: 3,
                v: " month"
            }]
        }
    },
    package_type_value_plural: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 4,
                k: "value"
            }, {
                t: 3,
                v: " months"
            }]
        }
    },
    uae_package_frequency: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Frequency"
        }
    },
    frequency_value_singular: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 4,
                k: "value"
            }, {
                t: 3,
                v: " visit per week"
            }]
        }
    },
    frequency_value_plural: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 4,
                k: "value"
            }, {
                t: 3,
                v: " visits per week"
            }]
        }
    },
    per_visit_value_singular: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 4,
                k: "value"
            }, {
                t: 3,
                v: " hour"
            }]
        }
    },
    per_visit_value_plural: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 4,
                k: "value"
            }, {
                t: 3,
                v: " hours"
            }]
        }
    },
    total_sessions: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Total Sessions"
        }
    },
    total_sessions_value: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 4,
                k: "value"
            }, {
                t: 3,
                v: " sessions"
            }]
        }
    },
    uae_package_professional: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Professional"
        }
    },
    cleaning_subscription: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Cleaning Subscription"
        }
    },
    any_specific_instructions: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Any specific instructions?"
        }
    },
    my_subscription: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "My Subscription"
        }
    },
    pause_subscription_info: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3,
                v: "You can pause your plan once per subscription period for up to "
            }, {
                t: 4,
                k: "days"
            }, {
                t: 3,
                v: " days. Bookings will automatically resume after the pause ends."
            }]
        }
    },
    no_thanks_continue_cancelling: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "No thanks, continue canceling"
        }
    },
    before_you_go: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Before You Go..."
        }
    },
    dont_miss_out_benefit: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Don't miss out on your exclusive benefits!"
        }
    },
    dont_lose_discount: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Don't lose your discount"
        }
    },
    discount_description: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "This discount will no longer be applicable once the subscription is cancelled."
        }
    },
    favorite_description: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "We will be unable to guarantee the availability of your favorite professional."
        }
    },
    your_favorite_professional: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Your Favorite Professional"
        }
    },
    package_cancellation_call_me_back_description: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "We’d love the chance to make things right. Reach out to our support team through the call-back option, and we’ll help right away."
        }
    },
    need_help: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Need Help"
        }
    },
    plans_change_and_that_s_okay: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Plans change, and that’s okay. Chat with our support team before you cancel. We’d love to help and continue to serve you!"
        }
    },
    add: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Add"
        }
    },
    edit: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Edit"
        }
    },
    upcoming_booking: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Upcoming Booking"
        }
    },
    schedule: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Schedule"
        }
    },
    package: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Package"
        }
    },
    keep_my_subscription: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Keep my subscription"
        }
    },
    cancellation_subscription_reschedule_description_html: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "We’d still love to serve you. <span class='bold'>Reschedule</assets-local/bd0188b5c32d91f9.binassets-local/assets-local/bd0188b5c32d91f9.binbd0188b5c32d91f9.binassets-local/assets-local/bd0188b5c32d91f9.binassets-local/assets-local/bd0188b5c32d91f9.binbd0188b5c32d91f9.binbd0188b5c32d91f9.binspan> your session in seconds, so you don't lose your subscription discount and preferred professional."
        }
    },
    cancellation_subscription_reschedule_title: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Plans Changed? Reschedule Instead"
        }
    },
    date: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Date"
        }
    },
    start_time: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Start Time"
        }
    },
    manage_subscription: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Manage Subscription"
        }
    },
    cancel_subscription: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Cancel Subscription"
        }
    },
    read_our_subscription_policy: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Read our subscription policy."
        }
    },
    add_on_duration_info: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "The duration of the session may change based on your selection."
        }
    },
    poor: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Poor"
        }
    },
    bad: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Bad"
        }
    },
    average: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Average"
        }
    },
    good: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Good"
        }
    },
    excellent: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Excellent"
        }
    },
    review_page_title_cleaner: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3,
                v: "How was your last experience with "
            }, {
                t: 4,
                k: "cleanerName"
            }, {
                t: 3,
                v: "?"
            }]
        }
    },
    review_page_title_multiple_cleaners: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "How was your last experience?"
        }
    },
    rate_your_experience: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Rate Your Experience"
        }
    },
    would_you_want_review: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Add a review to help us serve you better."
        }
    },
    add_a_tip: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Add a tip"
        }
    },
    low_rating_message: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "What could we have done better?"
        }
    },
    high_rating_message: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Looking forward to serving you again!"
        }
    },
    high_rating_message_marketplace: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Looking forward to serving you again!"
        }
    },
    other: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Other"
        }
    },
    no_comment: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "No Comment"
        }
    },
    reference_code: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Reference Code"
        }
    },
    book_again: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Book Again"
        }
    },
    you_rated: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "You Rated"
        }
    },
    edit_rating: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Edit Rating"
        }
    },
    tip_summary: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Tip Summary"
        }
    },
    custom_tip_limit_text: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3,
                v: "The maximum amount is "
            }, {
                t: 4,
                k: "amount"
            }, {
                t: 3,
                v: ". "
            }]
        }
    },
    refer_and_earn: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Refer & Earn"
        }
    },
    invite_friend: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Invite a Friend"
        }
    },
    copy_code: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Copy Code"
        }
    },
    your_referrals: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Your Referrals "
        }
    },
    how_it_works: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Here's How It Works"
        }
    },
    earned_credits: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Earned Credits"
        }
    },
    invites_sent: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Invites Sent"
        }
    },
    share_referral_code: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Share Your Referral Code"
        }
    },
    share_referral_code_description: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Invite your friend to sign up"
        }
    },
    your_friend_reward: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Your Friend's Reward"
        }
    },
    your_friend_reward_description: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3,
                v: "They get "
            }, {
                t: 4,
                k: "amount"
            }, {
                t: 3,
                v: " off their first booking using your code"
            }]
        }
    },
    you_get_amount: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3,
                v: "You get "
            }, {
                t: 4,
                k: "amount"
            }, {
                t: 3,
                v: " 🔥"
            }]
        }
    },
    you_get_amount_description: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Once your friend completes their booking"
        }
    },
    copied: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Copied!"
        }
    },
    voucher_is_awaiting: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3,
                v: "<span class='f-subtitle1 c-h-xxs'>"
            }, {
                t: 4,
                k: "voucherCode"
            }, {
                t: 3,
                v: "</assets-local/bd0188b5c32d91f9.binassets-local/assets-local/bd0188b5c32d91f9.binbd0188b5c32d91f9.binassets-local/assets-local/bd0188b5c32d91f9.binassets-local/assets-local/bd0188b5c32d91f9.binbd0188b5c32d91f9.binbd0188b5c32d91f9.binspan> voucher code is ready, please select one or more options from the list to get this voucher code applied!"
            }]
        }
    },
    select_your_start_time: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Select your start time"
        }
    },
    instant: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Instant"
        }
    },
    pick_a_slot: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Pick a slot"
        }
    },
    instant_checkout_preparing_text_1: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Matching you with the nearest professional..."
        }
    },
    instant_checkout_preparing_text_2: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Hang tight...confirming your professional."
        }
    },
    instant_checkout_preparing_text_3: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Locked & loading! Your professional's almost on the way."
        }
    },
    preparing_instant_booking: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Preparing your Instant Booking"
        }
    },
    today: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Today"
        }
    },
    wallet: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Wallet"
        }
    },
    see_wallet_activity: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "See Wallet Activity"
        }
    },
    justlife_credit: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Justlife Credit"
        }
    },
    book_now_to_redeem_credit: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Book now to redeem your credit balance"
        }
    },
    buy_now: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Buy now"
        }
    },
    top_up: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Top-up"
        }
    },
    all_wallet_activity: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "All Wallet Activity"
        }
    },
    promotions: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Promotions"
        }
    },
    all: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "All"
        }
    },
    credit_packages: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Credit Packages"
        }
    },
    view_all: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "View All"
        }
    },
    you_pay: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "You Pay"
        }
    },
    you_get: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "You Get"
        }
    },
    bestseller: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Bestseller"
        }
    },
    pay_less_get_more: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Pay Less Get More"
        }
    },
    credit_packages_description: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "The ultimate hack to paying less for more of what you love!"
        }
    },
    credit_packages_how_it_works: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "How it works?"
        }
    },
    pick_a_package: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Pick a Package"
        }
    },
    pick_a_package_description: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Choose Basic, Smart, or Super."
        }
    },
    pay_once: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Pay Once"
        }
    },
    pay_once_description: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Get instant credit in your Justlife Wallet."
        }
    },
    book_anytime: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Book Anytime"
        }
    },
    book_anytime_description: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Use credit on any service, no minimum spend. Not applicable on Cleaning Subscriptions."
        }
    },
    track_balance: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Track Balance"
        }
    },
    track_balance_description: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Check your credit anytime on the Wallet page"
        }
    },
    easy_cancellation: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Easy Cancellation"
        }
    },
    easy_cancellation_description: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Cancel bookings 24 hrs in advance to get full credit refund."
        }
    },
    why_get_credit_package: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Why Get a Credit Package?"
        }
    },
    why_get_credit_package_description: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Because paying full price is so last season. Lock in more credit, book what you love, and flex smarter spending."
        }
    },
    no_more_code_hunting: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "No More Code Hunting!"
        }
    },
    no_more_code_hunting_description: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Save on every single booking."
        }
    },
    total: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Total"
        }
    },
    available_promotions: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Available Promos"
        }
    },
    explore_all_promotions: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Explore all available promotions."
        }
    },
    choose_service: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Choose a Service"
        }
    },
    credit_details: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Details"
        }
    },
    non_applicable_credits: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Non Applicable Credits"
        }
    },
    no_applicable_credits_available: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "There are no applicable credits available."
        }
    },
    applied_credits: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Applied Credits"
        }
    },
    expires_in_days: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3,
                v: "Expires in <strong>"
            }, {
                t: 4,
                k: "days"
            }, {
                t: 3,
                v: "</assets-local/bd0188b5c32d91f9.binassets-local/assets-local/bd0188b5c32d91f9.binbd0188b5c32d91f9.binassets-local/assets-local/bd0188b5c32d91f9.binassets-local/assets-local/bd0188b5c32d91f9.binbd0188b5c32d91f9.binbd0188b5c32d91f9.binstrong> days"
            }]
        }
    },
    apply_credit: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Apply"
        }
    },
    applied: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Applied"
        }
    },
    wallet_balance: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Wallet Balance"
        }
    },
    justlife_wallet: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Justlife Wallet"
        }
    },
    tcs: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "T&Cs"
        }
    },
    credit_description_line1: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Includes Package, Refund, Complaint, and Gift Card credits."
        }
    },
    credit_description_line2: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Tap on Justlife Credit to view applicable services."
        }
    },
    credit_description_line3: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: 'Expiry dates vary for each credit. Tap "See Wallet Activity" for details.'
        }
    },
    credit_description_line4: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Cancel bookings 24 hrs in advance to get full credit refund."
        }
    },
    instruction_placeholder: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "To assist you better, describe your issue, so we can bring the right tools and parts."
        }
    },
    camera: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Camera"
        }
    },
    photos: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Photos"
        }
    },
    unsupported_media_type: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Unsupported media type"
        }
    },
    instruction_video_no_preview: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "No preview"
        }
    },
    instruction_video_not_playable: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "This video uses a format your browser cannot play. The file will still be sent with your request."
        }
    },
    instruction_image_no_preview: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "No preview"
        }
    },
    instruction_image_not_previewable: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "This image uses a format your browser cannot show. The file will still be sent with your request."
        }
    },
    n_options: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 4,
                k: "count"
            }, {
                t: 3,
                v: " Options"
            }]
        }
    },
    starts_at: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3,
                v: "Starts at "
            }, {
                t: 4,
                k: "currency"
            }, {
                t: 3,
                v: " "
            }, {
                t: 4,
                k: "startingPrice"
            }]
        }
    },
    confirm: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Confirm"
        }
    },
    exceed_purchase_limit: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Exceeded Purchase Limit"
        }
    },
    exceed_purchase_description: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "You can only purchase one bundle at a time."
        }
    },
    professional_valid_for_this_first_booking: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "This professional selection is valid for the first booking."
        }
    },
    professional_valid_for_this_booking: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "This professional selection is valid for this booking."
        }
    },
    amount_captured_fully: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Your bundle booking amount is captured fully at the time of booking creation."
        }
    },
    bundle_details: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Bundle Details"
        }
    },
    cancelled_bundle: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Cancelled Bundle"
        }
    },
    expired_bundle: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Expired Bundle"
        }
    },
    remaining_bookings: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3,
                v: "Remaining Bookings: "
            }, {
                t: 4,
                k: "remainingBookings"
            }]
        }
    },
    active_bundles: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Active Bundles"
        }
    },
    you_have_active_bundles: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3,
                v: "You have "
            }, {
                t: 4,
                k: "availableBundleCount"
            }, {
                t: 3,
                v: " active bundles"
            }]
        }
    },
    see_whats_included: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "See what’s included"
        }
    },
    bundle_validity: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3,
                v: "Bundle Validity: "
            }, {
                t: 4,
                k: "validityDate"
            }]
        }
    },
    redeem: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Redeem"
        }
    },
    not_booked_yet: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Not booked yet"
        }
    },
    applicable_for_first_session: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Applicable for the first session"
        }
    },
    ksa_licensed_info: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Bookings are fulfilled through licensed service providers: Esad, Mueen, Jawahr, Al Falak."
        }
    },
    operational_issue_title: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "A Small Change to Your Booking:"
        }
    },
    operational_issue_description: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3,
                v: "Your service has been reassigned to a top-rated professional. <strong>Prefer someone else?</assets-local/bd0188b5c32d91f9.binassets-local/assets-local/bd0188b5c32d91f9.binbd0188b5c32d91f9.binassets-local/assets-local/bd0188b5c32d91f9.binassets-local/assets-local/bd0188b5c32d91f9.binbd0188b5c32d91f9.binbd0188b5c32d91f9.binstrong> Please select another professional & get <strong>"
            }, {
                t: 4,
                k: "amount"
            }, {
                t: 3,
                v: "</assets-local/bd0188b5c32d91f9.binassets-local/assets-local/bd0188b5c32d91f9.binbd0188b5c32d91f9.binassets-local/assets-local/bd0188b5c32d91f9.binassets-local/assets-local/bd0188b5c32d91f9.binbd0188b5c32d91f9.binbd0188b5c32d91f9.binstrong> once booking has been completed."
            }]
        }
    },
    operational_issue_description_time_change: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3,
                v: "Your booking has been moved to the earliest available slot due to an operational issue. <strong>Prefer another time?</assets-local/bd0188b5c32d91f9.binassets-local/assets-local/bd0188b5c32d91f9.binbd0188b5c32d91f9.binassets-local/assets-local/bd0188b5c32d91f9.binassets-local/assets-local/bd0188b5c32d91f9.binbd0188b5c32d91f9.binbd0188b5c32d91f9.binstrong> Select a new slot & get <strong>"
            }, {
                t: 4,
                k: "amount"
            }, {
                t: 3,
                v: "</assets-local/bd0188b5c32d91f9.binassets-local/assets-local/bd0188b5c32d91f9.binbd0188b5c32d91f9.binassets-local/assets-local/bd0188b5c32d91f9.binassets-local/assets-local/bd0188b5c32d91f9.binbd0188b5c32d91f9.binbd0188b5c32d91f9.binstrong> once booking is completed."
            }]
        }
    },
    operational_issue_credit_brief_title: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 4,
                k: "amount"
            }, {
                t: 3,
                v: " Wallet Credit"
            }]
        }
    },
    operational_issue_credit_brief_description: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Amount will be added to your wallet after you complete this booking."
        }
    },
    previous_booking_details: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Previous Booking Details"
        }
    },
    new_bookings_details: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "New Booking Details"
        }
    },
    operational_issue_inform_description: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "You can select a new professional, or cancel this booking with no fees or penalties by clicking Edit this booking."
        }
    },
    operational_issue_inform_description_time_change: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "You can select a different time, or cancel this booking with no fees or penalties by clicking Edit this booking."
        }
    },
    operational_issue_action_button_text: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Edit this booking"
        }
    },
    multiple_professional: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Multiple Professionals"
        }
    },
    take_action: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Take Action"
        }
    },
    confirm_new_time: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Confirm New Time"
        }
    },
    service_conducted_online: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "This service is conducted online."
        }
    },
    top_professional: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Top Professional"
        }
    },
    careem_pay_short: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Careem Pay"
        }
    },
    pay_amount: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3,
                v: "Pay "
            }, {
                t: 4,
                k: "amount"
            }]
        }
    },
    every: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Every"
        }
    },
    start_date: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Start date"
        }
    },
    add_voucher_placeholder: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Add your code here"
        }
    },
    choose_your_frequency: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Choose Your Frequency"
        }
    },
    one_time_service: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "One-Time Service"
        }
    },
    monthly_subscription: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Monthly subscription"
        }
    },
    booking_details_inc_vat: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Booking details (incl. VAT)"
        }
    },
    edit_this_booking_only: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Edit this booking only"
        }
    },
    pause_subscription: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Pause Subscription"
        }
    },
    best_professional: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Best Professional"
        }
    },
    show_some_love_professional: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3,
                v: "Show some love to "
            }, {
                t: 4,
                k: "professional_name"
            }, {
                t: 3,
                v: " 💙"
            }]
        }
    },
    tip_goes_professional: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "100% of your tip goes directly to your professional"
        }
    },
    save_this_tip_new_time: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3,
                v: "Save this tip for next time with "
            }, {
                t: 4,
                k: "professional_name"
            }]
        }
    },
    tip: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Tip"
        }
    },
    tip_amount: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Tip Amount"
        }
    },
    apply: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Apply"
        }
    },
    maximum_tip: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3,
                v: "The maximum tip is "
            }, {
                t: 4,
                k: "max_tip_amount"
            }]
        }
    },
    invite_friend_message: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3,
                v: `Sharing my favourite life hack. 👇
Justlife is my go-to app for home services, from cleaning and salon appointments to healthcare, maintenance and more.
Use my referral link `
            }, {
                t: 4,
                k: "url"
            }, {
                t: 3,
                v: " to get "
            }, {
                t: 4,
                k: "currency"
            }, {
                t: 3,
                v: " "
            }, {
                t: 4,
                k: "amount"
            }, {
                t: 3,
                v: " off your first booking. New users only. Offer valid for 30 days."
            }]
        }
    },
    first_booking_surcharge_fee_text: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "First booking? Your fuel surcharge fee is on us. Enjoy!"
        }
    },
    free: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Free"
        }
    }
};
export {
    i as
    default
};