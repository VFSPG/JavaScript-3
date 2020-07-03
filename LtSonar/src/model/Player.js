/* Copyright (C) 2020 Scott Henshaw, All Rights Reserved */
'use strict';

export default class Player {

    constructor( name = "unknown", role = "unknown") {
        this.name = name;
        this.role = "Captain";
        this.team = "B";
    }

    serialize() {

    }

    deserialize( someJSONString ) {

    }
}