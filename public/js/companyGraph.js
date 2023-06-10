(function (window) {
    const companyGraphs = {}

    companyGraphs.dsq001 = {
        nodes: [
            {
                id: 0,
                label: '大石桥市南楼经济开发区利群镁粉厂',
                class: 'type-on'
            },
            {
                id: 1,
                label: '轻烧窑1',
                class: 'type-on'
            },
            {
                id: 2,
                label: '轻烧窑2',
                class: 'type-on'
            },
            {
                id: 3,
                label: '轻烧窑3',
                class: 'type-on'
            },
            {
                id: 4,
                label: '轻烧窑4',
                class: 'type-on'
            },
            {
                id: 5,
                label: '除尘风机1',
                class: 'type-on'
            },
            {
                id: 6,
                label: '喷淋水泵1',
                class: 'type-on'
            },
            {
                id: 7,
                label: '喷淋水泵2',
                class: 'type-on'
            },
            {
                id: 8,
                label: '监控单元1',
                class: 'type-on'
            }
        ],
        edges: [
            [
                0,
                1
            ],
            [
                0,
                2
            ],
            [
                0,
                3
            ],
            [
                0,
                4
            ],
            [
                1,
                5
            ],
            [
                2,
                5
            ],
            [
                3,
                5
            ],
            [
                4,
                5
            ],
            [
                5,
                6
            ],
            [
                5,
                7
            ],
            [
                6,
                8
            ],
            [
                7,
                8
            ]
        ],
        errLine: [
        ],
        errNodes: [
        ]
    }

    companyGraphs.dsq002 = {
        nodes: [
            {
                id: 0,
                label: '大石桥市山镁耐火材料有限公司',
                class: 'type-on'
            },
            {
                id: 1,
                label: '电熔炉1',
                class: 'type-on'
            },
            {
                id: 2,
                label: '电熔炉2',
                class: 'type-on'
            },
            {
                id: 3,
                label: '除尘风机1',
                class: 'type-on'
            },
            {
                id: 4,
                label: '监控单元1',
                class: 'type-on'
            }
        ],
        edges: [
            [
                0,
                1
            ],
            [
                0,
                2
            ],
            [
                1,
                3
            ],
            [
                2,
                3
            ],
            [
                3,
                4
            ]
        ],
        errLine: [
            1,
            3,
            6,
            9
        ],
        errNodes: [
            2,
            7
        ]
    }

    companyGraphs.dsq003 = {
        nodes: [
            {
                id: 0,
                label: '营口赛斯德型材有限公司',
                class: 'type-on'
            },
            {
                id: 1,
                label: '生产风机1',
                class: 'type-on'
            },
            {
                id: 2,
                label: '生产风机2',
                class: 'type-on'
            },
            {
                id: 3,
                label: '生产风机3',
                class: 'type-on'
            },
            {
                id: 4,
                label: '除尘风机1',
                class: 'type-on'
            },
            {
                id: 5,
                label: '除尘风机2',
                class: 'type-on'
            },
            {
                id: 6,
                label: '监控单元1',
                class: 'type-on'
            }
        ],
        edges: [
            [
                0,
                1
            ],
            [
                0,
                2
            ],
            [
                0,
                3
            ],
            [
                1,
                4
            ],
            [
                1,
                5
            ],
            [
                2,
                4
            ],
            [
                2,
                5
            ],
            [
                3,
                4
            ],
            [
                3,
                5
            ],
            [
                4,
                6
            ],
            [
                5,
                6
            ]
        ],
        errLine: [
        ],
        errNodes: [
        ]
    }

    companyGraphs.dsq004 = {
        nodes: [
            {
                id: 0,
                label: '营口南楼新亚耐火材料厂',
                class: 'type-on'
            },
            {
                id: 1,
                label: '轻烧窑1',
                class: 'type-on'
            },
            {
                id: 2,
                label: '轻烧窑2',
                class: 'type-on'
            },
            {
                id: 3,
                label: '轻烧窑3',
                class: 'type-on'
            },
            {
                id: 4,
                label: '轻烧窑4',
                class: 'type-on'
            },
            {
                id: 5,
                label: '除尘风机1',
                class: 'type-on'
            },
            {
                id: 6,
                label: '除尘风机2',
                class: 'type-on'
            },
            {
                id: 7,
                label: '喷淋水泵1',
                class: 'type-on'
            },
            {
                id: 8,
                label: '喷淋水泵2',
                class: 'type-on'
            },
            {
                id: 9,
                label: '监控单元1',
                class: 'type-on'
            }
        ],
        edges: [
            [
                0,
                1
            ],
            [
                0,
                2
            ],
            [
                0,
                3
            ],
            [
                0,
                4
            ],
            [
                1,
                5
            ],
            [
                2,
                5
            ],
            [
                3,
                5
            ],
            [
                4,
                5
            ],
            [
                1,
                6
            ],
            [
                2,
                6
            ],
            [
                3,
                6
            ],
            [
                4,
                6
            ],
            [
                4,
                6
            ],
            [
                5,
                7
            ],
            [
                5,
                8
            ],
            [
                6,
                7
            ],
            [
                6,
                8
            ],
            [
                7,
                9
            ],
            [
                8,
                9
            ]

        ],
        errLine: [
        ],
        errNodes: [
        ]
    }

    companyGraphs.dsq005 = {
        nodes: [
            {
                id: 0,
                label: '营口南楼开发区盛瑞镁业有限公司',
                class: 'type-on'
            },
            {
                id: 1,
                label: '重烧竖窑1',
                class: 'type-on'
            },
            {
                id: 2,
                label: '除尘风机',
                class: 'type-on'
            },
            {
                id: 3,
                label: '监控单元1',
                class: 'type-on'
            }
        ],
        edges: [
            [
                0,
                1
            ],
            [
                1,
                2
            ],
            [
                2,
                3
            ]
        ],
        errLine: [
        ],
        errNodes: [
        ]
    }

    companyGraphs.dsq006 = {
        nodes: [
            {
                id: 0,
                label: '大石桥市吉祥耐火材料有限公司',
                class: 'type-on'
            },
            {
                id: 1,
                label: '电熔炉1',
                class: 'type-on'
            },
            {
                id: 2,
                label: '电熔炉2',
                class: 'type-on'
            },
            {
                id: 3,
                label: '除尘风机1',
                class: 'type-on'
            },
            {
                id: 4,
                label: '除尘风机2',
                class: 'type-on'
            },
            {
                id: 5,
                label: '监控单元1',
                class: 'type-on'
            }
        ],
        edges: [
            [
                0,
                1
            ],
            [
                0,
                2
            ],
            [
                1,
                3
            ],
            [
                2,
                4
            ],
            [
                3,
                5
            ],
            [
                4,
                5
            ]
        ],
        errLine: [
        ],
        errNodes: [
        ]
    }

    companyGraphs.dsq007 = {
        nodes: [
            {
                id: 0,
                label: '大石桥市欣达耐火材料有限公司',
                class: 'type-on'
            },
            {
                id: 1,
                label: '电熔炉1',
                class: 'type-on'
            },
            {
                id: 2,
                label: '电熔炉2',
                class: 'type-on'
            },
            {
                id: 3,
                label: '电熔炉3',
                class: 'type-on'
            },
            {
                id: 4,
                label: '电熔炉4',
                class: 'type-on'
            },
            {
                id: 5,
                label: '除尘风机1',
                class: 'type-on'
            },
            {
                id: 6,
                label: '除尘风机2',
                class: 'type-on'
            },
            {
                id: 7,
                label: '监控单元1',
                class: 'type-on'
            }
        ],
        edges: [
            [0, 1],
            [0, 2],
            [0, 3],
            [0, 4],
            [1, 5],
            [2, 5],
            [3, 5],
            [4, 5],
            [1, 6],
            [2, 6],
            [3, 6],
            [4, 6],
            [5, 7],
            [6, 7]
        ],
        errLine: [
        ],
        errNodes: [
        ]
    }

    companyGraphs.dsq008 = {
        nodes: [
            {
                id: 0,
                label: '大石桥市高庄菱镁材料厂',
                class: 'type-on'
            },
            {
                id: 1,
                label: '轻烧窑1',
                class: 'type-on'
            },
            {
                id: 2,
                label: '轻烧窑2',
                class: 'type-on'
            },
            {
                id: 3,
                label: '轻烧窑3',
                class: 'type-on'
            },
            {
                id: 4,
                label: '轻烧窑4',
                class: 'type-on'
            },
            {
                id: 5,
                label: '轻烧窑5',
                class: 'type-on'
            },
            {
                id: 6,
                label: '轻烧窑6',
                class: 'type-on'
            },
            {
                id: 7,
                label: '轻烧窑7',
                class: 'type-on'
            },
            {
                id: 8,
                label: '轻烧窑8',
                class: 'type-on'
            },
            {
                id: 9,
                label: '轻烧窑9',
                class: 'type-on'
            },
            {
                id: 10,
                label: '轻烧窑10',
                class: 'type-on'
            },
            {
                id: 11,
                label: '轻烧窑11',
                class: 'type-on'
            },
            {
                id: 12,
                label: '轻烧窑12',
                class: 'type-on'
            },
            {
                id: 13,
                label: '轻烧窑13',
                class: 'type-on'
            },
            {
                id: 14,
                label: '轻烧窑14',
                class: 'type-on'
            },
            {
                id: 15,
                label: '轻烧窑15',
                class: 'type-on'
            },
            {
                id: 16,
                label: '轻烧窑16',
                class: 'type-on'
            },
            {
                id: 17,
                label: '轻烧窑17',
                class: 'type-on'
            },
            {
                id: 18,
                label: '轻烧窑18',
                class: 'type-on'
            },
            {
                id: 19,
                label: '除尘风机1',
                class: 'type-on'
            },
            {
                id: 20,
                label: '除尘风机2',
                class: 'type-on'
            },
            {
                id: 21,
                label: '喷淋水泵1',
                class: 'type-on'
            },
            {
                id: 22,
                label: '喷淋水泵2',
                class: 'type-on'
            },
            {
                id: 23,
                label: '监控单元1',
                class: 'type-on'
            },
            {
                id: 24,
                label: '监控单元2',
                class: 'type-on'
            }
        ],
        edges: [
            [0, 1],
            [0, 2],
            [0, 3],
            [0, 4],
            [0, 5],
            [0, 6],
            [0, 7],
            [0, 8],
            [0, 9],
            [0, 10],
            [0, 11],
            [0, 12],
            [0, 13],
            [0, 14],
            [0, 15],
            [0, 16],
            [0, 17],
            [0, 18],
            [1, 19],
            [2, 19],
            [3, 19],
            [4, 19],
            [5, 19],
            [6, 19],
            [7, 19],
            [8, 19],
            [9, 20],
            [10, 20],
            [11, 20],
            [12, 20],
            [13, 20],
            [14, 20],
            [15, 20],
            [16, 20],
            [17, 20],
            [18, 20],
            [19, 21],
            [20, 22],
            [21, 23],
            [22, 24]
        ],
        errLine: [
        ],
        errNodes: [
        ]
    }

    companyGraphs.dsq009 = {
        nodes: [
            { id: 0, label: '营口金煜耐火材料有限公司', class: 'type-on' },
            { id: 1, label: '电熔炉1', class: 'type-on' },
            { id: 2, label: '电熔炉2', class: 'type-on' },
            { id: 3, label: '电熔炉3', class: 'type-on' },
            { id: 4, label: '除尘风机1', class: 'type-on' },
            { id: 5, label: '除尘风机2', class: 'type-on' },
            { id: 6, label: '除尘风机3', class: 'type-on' },
            { id: 7, label: '监控单元1', class: 'type-on' }
        ],
        edges: [
            [0, 1],
            [0, 2],
            [0, 3],
            [1, 4],
            [2, 5],
            [3, 6],
            [4, 7],
            [5, 7],
            [6, 7]
        ],
        errLine: [
        ],
        errNodes: [
        ]
    }

    companyGraphs.dsq010 = {
        nodes: [
            { id: 0, label: '营口嘉信诚耐火材料有限公司', class: 'type-on' },
            { id: 1, label: '重烧竖窑1', class: 'type-on' },
            { id: 2, label: '重烧竖窑2', class: 'type-on' },
            { id: 3, label: '除尘风机1', class: 'type-on' },
            { id: 4, label: '喷淋水泵1', class: 'type-on' },
            { id: 5, label: '监控单元1', class: 'type-on' }
        ],
        edges: [
            [0, 1],
            [0, 2],
            [1, 3],
            [2, 3],
            [3, 4],
            [4, 5]
        ],
        errLine: [
        ],
        errNodes: [
        ]
    }

    companyGraphs.dsq011 = {
        nodes: [
            { id: 0, label: '大石桥市山颖耐火材料厂', class: 'type-on' },
            { id: 1, label: '电熔炉1', class: 'type-on' },
            { id: 2, label: '电熔炉2', class: 'type-on' },
            { id: 3, label: '除尘风机1', class: 'type-on' },
            { id: 4, label: '监控单元1', class: 'type-on' }
        ],
        edges: [
            [0, 1],
            [0, 2],
            [1, 3],
            [2, 3],
            [3, 4]
        ],
        errLine: [
        ],
        errNodes: [
        ]
    }

    companyGraphs.dsq012 = {
        'nodes': [
            { 'id': 0, 'label': '喷淋水泵1', 'class': 'type-on' },
            { 'id': 1, 'label': '轻烧窑1', 'class': 'type-on' },
            { 'id': 2, 'label': '重烧竖窑2', 'class': 'type-on' },
            { 'id': 3, 'label': '重烧竖窑1', 'class': 'type-on' },
            { 'id': 4, 'label': '除尘风机1', 'class': 'type-on' },
            { 'id': 5, 'label': '除尘风机2', 'class': 'type-on' },
            { 'id': 9, 'label': '营口市凯兄弟耐火材料有限公司', 'class': 'type-on' },
            { 'id': 7, 'label': '轻烧窑2', 'class': 'type-on' },
            { 'id': 8, 'label': '轻烧窑3', 'class': 'type-on' }],
        'edges': [[3, 4], [2, 4], [1, 5], [7, 5], [8, 5], [4, 0]],
        'errLine': [],
        'errNodes': []
    }

    companyGraphs.dsq013 = {
        nodes: [
            { id: 0, label: '大石桥市高庄菱镁材料加工厂', class: 'type-on' },
            { id: 1, label: '轻烧窑1', class: 'type-on' },
            { id: 2, label: '轻烧窑2', class: 'type-on' },
            { id: 3, label: '除尘风机1', class: 'type-on' },
            { id: 4, label: '喷淋水泵1', class: 'type-on' },
            { id: 5, label: '喷淋水泵2', class: 'type-on' },
            { id: 6, label: '监控单元1', class: 'type-on' }
        ],
        edges: [
            [0, 1],
            [0, 2],
            [1, 3],
            [2, 3],
            [3, 4],
            [3, 5],
            [4, 6],
            [5, 6]
        ],
        errLine: [
        ],
        errNodes: [
        ]
    }

    companyGraphs.dsq014 = {
        nodes: [
            { id: 0, label: '营口南楼鑫欣镁质材料厂', class: 'type-on' },
            { id: 1, label: '轻烧窑1', class: 'type-on' },
            { id: 2, label: '除尘风机1', class: 'type-on' },
            { id: 3, label: '喷淋水泵1', class: 'type-on' },
            { id: 4, label: '喷淋水泵2', class: 'type-on' },
            { id: 5, label: '监控单元1', class: 'type-on' }
        ],
        edges: [
            [0, 1],
            [1, 2],
            [2, 3],
            [2, 4],
            [3, 5],
            [4, 5]
        ],
        errLine: [
        ],
        errNodes: [
        ]
    }

    companyGraphs.dsq015 = {
        nodes: [
            { id: 0, label: '大石桥市韩权耐火材料厂', class: 'type-on' },
            { id: 1, label: '重烧竖窑1', class: 'type-on' },
            { id: 2, label: '重烧竖窑2', class: 'type-on' },
            { id: 3, label: '重烧竖窑3', class: 'type-on' },
            { id: 4, label: '除尘风机1', class: 'type-on' },
            { id: 5, label: '喷淋水泵1', class: 'type-on' },
            { id: 6, label: '喷淋水泵2', class: 'type-on' },
            { id: 7, label: '喷淋水泵3', class: 'type-on' },
            { id: 8, label: '监控单元1', class: 'type-on' }
        ],
        edges: [
            [0, 1],
            [0, 2],
            [0, 3],
            [1, 4],
            [2, 4],
            [3, 4],
            [4, 5],
            [4, 6],
            [4, 7],
            [5, 8],
            [6, 8],
            [7, 8]
        ],
        errLine: [
        ],
        errNodes: [
        ]
    }

    companyGraphs.dsq016 = {
        nodes: [
            { id: 0, label: '大石桥市恒达耐火材料有限公司', class: 'type-on' },
            { id: 1, label: '重烧竖窑1', class: 'type-on' },
            { id: 2, label: '重烧竖窑2', class: 'type-on' },
            { id: 3, label: '重烧竖窑3', class: 'type-on' },
            { id: 4, label: '重烧竖窑4', class: 'type-on' },
            { id: 5, label: '重烧竖窑5', class: 'type-on' },
            { id: 6, label: '重烧竖窑6', class: 'type-on' },
            { id: 7, label: '重烧竖窑7', class: 'type-on' },
            { id: 8, label: '重烧竖窑8', class: 'type-on' },
            { id: 9, label: '除尘风机1', class: 'type-on' },
            { id: 10, label: '除尘风机2', class: 'type-on' },
            { id: 11, label: '喷淋水泵1', class: 'type-on' },
            { id: 12, label: '喷淋水泵2', class: 'type-on' },
            { id: 13, label: '监控单元1', class: 'type-on' },
            { id: 14, label: '监控单元2', class: 'type-on' }
        ],
        edges: [
            [0, 1],
            [0, 2],
            [0, 3],
            [0, 4],
            [0, 5],
            [0, 6],
            [0, 7],
            [0, 8],
            [1, 9],
            [2, 9],
            [3, 9],
            [4, 9],
            [5, 9],
            [6, 9],
            [9, 11],
            [9, 12],
            [11, 13],
            [12, 13],
            [7, 10],
            [8, 10],
            [10, 14]
        ],
        errLine: [
        ],
        errNodes: [
        ]
    }

    companyGraphs.dsq017 = { 'nodes': [{ 'id': 0, 'label': '隧道窑（主）', 'class': 'type-on' }, { 'id': 1, 'label': '隧道窑（副）', 'class': 'type-on' }, { 'id': 2, 'label': '除尘风机1', 'class': 'type-on' }, { 'id': 3, 'label': '除尘风机2', 'class': 'type-on' }, { 'id': 4, 'label': '营口卓信耐火材料有限公司', 'class': 'type-on' }], 'edges': [[0, 2], [0, 3], [1, 2], [1, 3], [4, 0], [4, 1]], 'errLine': [], 'errNodes': [] }

    companyGraphs.dsq018 = {
        nodes: [
            { id: 0, label: '大石桥市震宇耐火材料有限公司', class: 'type-on' },
            { id: 1, label: '隧道窑1（主）', class: 'type-on' },
            { id: 2, label: '隧道窑1（备）', class: 'type-on' },
            { id: 3, label: '隧道窑2（主）', class: 'type-on' },
            { id: 4, label: '隧道窑2（备）', class: 'type-on' },
            { id: 5, label: '除尘风机1', class: 'type-on' },
            { id: 6, label: '除尘风机2', class: 'type-on' },
            { id: 7, label: '喷淋水泵1', class: 'type-on' },
            { id: 8, label: '监控单元1', class: 'type-on' }
        ],
        edges: [
            [0, 1],
            [0, 2],
            [0, 3],
            [0, 4],
            [1, 5],
            [2, 5],
            [3, 5],
            [4, 5],
            [1, 6],
            [2, 6],
            [3, 6],
            [4, 6],
            [5, 7],
            [6, 7],
            [7, 8]
        ],
        errLine: [
        ],
        errNodes: [
        ]
    }

    companyGraphs.dsq019 = {
        nodes: [
            { id: 0, label: '大石桥市华盛耐火材料有限公司', class: 'type-on' },
            { id: 1, label: '电熔炉1', class: 'type-on' },
            { id: 2, label: '电熔炉2', class: 'type-on' },
            { id: 3, label: '除尘风机1', class: 'type-on' },
            { id: 4, label: '除尘风机2', class: 'type-on' },
            { id: 5, label: '监控单元1', class: 'type-on' }
        ],
        edges: [
            [0, 1],
            [0, 2],
            [1, 3],
            [2, 4],
            [3, 5],
            [4, 5]
        ],
        errLine: [
        ],
        errNodes: [
        ]
    }

    companyGraphs.dsq020 = {
        nodes: [
            { id: 0, label: '雷汉(营口）金属有限公司', class: 'type-on' },
            { id: 1, label: '隧道窑1（主）', class: 'type-on' },
            { id: 2, label: '隧道窑1（备）', class: 'type-on' },
            { id: 3, label: '隧道窑2', class: 'type-on' },
            { id: 4, label: '除尘风机1', class: 'type-on' },
            { id: 5, label: '监控单元1', class: 'type-on' }
        ],
        edges: [
            [0, 1],
            [0, 2],
            [0, 3],
            [1, 4],
            [2, 4],
            [3, 4],
            [4, 5]
        ],
        errLine: [
        ],
        errNodes: [
        ]
    }

    companyGraphs.dsq021 = {
        nodes: [
            { id: 0, label: '大石桥市金龙祥矿业有限公司', class: 'type-on' },
            { id: 1, label: '电熔炉1', class: 'type-on' },
            { id: 2, label: '电熔炉2', class: 'type-on' },
            { id: 3, label: '电熔炉3', class: 'type-on' },
            { id: 4, label: '电熔炉4', class: 'type-on' },
            { id: 5, label: '除尘风机1', class: 'type-on' },
            { id: 6, label: '除尘风机2', class: 'type-on' },
            { id: 7, label: '监控单元1', class: 'type-on' }
        ],
        edges: [
            [0, 1],
            [0, 2],
            [0, 3],
            [0, 4],
            [1, 5],
            [2, 5],
            [3, 6],
            [4, 6],
            [5, 7],
            [6, 7]
        ],
        errLine: [
        ],
        errNodes: [
        ]
    }

    companyGraphs.dsq022 = {
        nodes: [
            { id: 0, label: '大石桥市双杰耐火材料有限公司', class: 'type-on' },
            { id: 1, label: '重烧竖窑1', class: 'type-on' },
            { id: 2, label: '重烧竖窑2', class: 'type-on' },
            { id: 3, label: '轻烧窑1', class: 'type-on' },
            { id: 4, label: '轻烧窑2', class: 'type-on' },
            { id: 5, label: '除尘风机1', class: 'type-on' },
            { id: 6, label: '脱硫水泵1', class: 'type-on' },
            { id: 7, label: '脱硝水泵1', class: 'type-on' },
            { id: 8, label: '监控单元1', class: 'type-on' }
        ],
        edges: [
            [0, 1],
            [0, 2],
            [0, 3],
            [0, 4],
            [1, 5],
            [2, 5],
            [3, 5],
            [4, 5],
            [4, 5],
            [5, 6],
            [6, 7],
            [7, 8]
        ],
        errLine: [
        ],
        errNodes: [
        ]
    }

    companyGraphs.dsq023 = { 'nodes': [{ 'id': 0, 'label': '轻烧窑1', 'class': 'type-on' }, { 'id': 1, 'label': '轻烧窑2', 'class': 'type-on' }, { 'id': 2, 'label': '轻烧窑3', 'class': 'type-on' }, { 'id': 3, 'label': '轻烧窑4', 'class': 'type-on' }, { 'id': 4, 'label': '轻烧窑9', 'class': 'type-on' }, { 'id': 5, 'label': '轻烧窑10', 'class': 'type-on' }, { 'id': 6, 'label': '轻烧窑11', 'class': 'type-on' }, { 'id': 7, 'label': '轻烧窑12', 'class': 'type-on' }, { 'id': 8, 'label': '喷淋水泵1', 'class': 'type-on' }, { 'id': 9, 'label': '喷淋水泵2', 'class': 'type-on' }, { 'id': 10, 'label': '喷淋水泵5', 'class': 'type-on' }, { 'id': 11, 'label': '喷淋水泵6', 'class': 'type-on' }, { 'id': 12, 'label': '除尘风机1', 'class': 'type-on' }, { 'id': 13, 'label': '除尘风机3', 'class': 'type-on' }, { 'id': 14, 'label': '大石桥市金华宇耐火材料有限公司', 'class': 'type-on' }], 'edges': [[0, 12], [0, 13], [1, 12], [1, 13], [2, 12], [2, 13], [3, 12], [3, 13], [4, 12], [4, 13], [5, 12], [5, 13], [6, 12], [6, 13], [7, 12], [7, 13], [12, 8], [12, 9], [12, 10], [12, 11], [13, 8], [13, 9], [13, 10], [13, 11]], 'errLine': [], 'errNodes': [] }

    companyGraphs.dsq024 = {
        nodes: [
            { id: 0, label: '营口天利嘉耐火材料有限公司', class: 'type-on' },
            { id: 1, label: '轻烧窑1', class: 'type-on' },
            { id: 2, label: '轻烧窑2', class: 'type-on' },
            { id: 3, label: '轻烧窑3', class: 'type-on' },
            { id: 4, label: '轻烧窑4', class: 'type-on' },
            { id: 5, label: '轻烧窑5', class: 'type-on' },
            { id: 6, label: '轻烧窑6', class: 'type-on' },
            { id: 7, label: '除尘风机1', class: 'type-on' },
            { id: 8, label: '喷淋水泵1', class: 'type-on' },
            { id: 9, label: '监控单元1', class: 'type-on' }
        ],
        edges: [
            [0, 1],
            [0, 2],
            [0, 3],
            [0, 4],
            [0, 5],
            [0, 6],
            [1, 7],
            [2, 7],
            [3, 7],
            [4, 7],
            [5, 7],
            [6, 7],
            [7, 8],
            [8, 9]
        ],
        errLine: [
        ],
        errNodes: [
        ]
    }

    companyGraphs.dsq025 = { 'nodes': [{ 'id': 0, 'label': '重烧竖窑1', 'class': 'type-on' }, { 'id': 1, 'label': '重烧竖窑2', 'class': 'type-on' }, { 'id': 2, 'label': '喷淋水泵1', 'class': 'type-on' }, { 'id': 3, 'label': '除尘风机1', 'class': 'type-on' }, { 'id': 4, 'label': '除尘风机2', 'class': 'type-on' }, { 'id': 5, 'label': '喷淋水泵2', 'class': 'type-on' }, { 'id': 6, 'label': '重烧竖窑3', 'class': 'type-on' }, { 'id': 7, 'label': '重烧竖窑4', 'class': 'type-on' }, { 'id': 8, 'label': '营口南楼经济开发区威泰耐火材料厂', 'class': 'type-on' }], 'edges': [[0, 3], [1, 3], [6, 4], [7, 4], [3, 2], [4, 5], [8, 0], [8, 1], [8, 6], [8, 7]], 'errLine': [], 'errNodes': [] }

    companyGraphs.dsq026 = { 'nodes': [{ 'id': 0, 'label': '重烧竖窑1', 'class': 'type-on' }, { 'id': 1, 'label': '重烧竖窑2', 'class': 'type-on' }, { 'id': 2, 'label': '重烧竖窑3', 'class': 'type-on' }, { 'id': 7, 'label': '营口弘拓冶金炉料有限公司', 'class': 'type-on' }, { 'id': 8, 'label': '除尘风机', 'class': 'type-on' }], 'edges': [[0, 8], [1, 8], [2, 8], [7, 0], [7, 1], [7, 2]], 'errLine': [], 'errNodes': [] }

    companyGraphs.dsq027 = {
        nodes: [
            { id: 0, label: '大石桥市昌盛镁业有限公司', class: 'type-on' },
            { id: 1, label: '轻烧窑1', class: 'type-on' },
            { id: 2, label: '除尘风机1', class: 'type-on' },
            { id: 3, label: '喷淋水泵1', class: 'type-on' },
            { id: 4, label: '监控单元1', class: 'type-on' }
        ],
        edges: [
            [0, 1],
            [1, 2],
            [2, 3],
            [3, 4]
        ],
        errLine: [
        ],
        errNodes: [
        ]
    }

    companyGraphs.dsq028 = {
        nodes: [
            { id: 0, label: '营口南楼经济开发区佳兴镁质材料厂', class: 'type-on' },
            { id: 1, label: '轻烧窑1', class: 'type-on' },
            { id: 2, label: '轻烧窑2', class: 'type-on' },
            { id: 3, label: '除尘风机1', class: 'type-on' },
            { id: 4, label: '喷淋水泵1', class: 'type-on' },
            { id: 5, label: '喷淋水泵2', class: 'type-on' },
            { id: 6, label: '监控单元1', class: 'type-on' }
        ],
        edges: [
            [0, 1],
            [0, 2],
            [1, 3],
            [2, 3],
            [3, 4],
            [3, 5],
            [4, 6],
            [5, 6]
        ],
        errLine: [
        ],
        errNodes: [
        ]
    }

    companyGraphs.dsq029 = {
        nodes: [
            { id: 0, label: '营口盛源新型材料有限公司', class: 'type-on' },
            { id: 1, label: '重烧竖窑1', class: 'type-on' },
            { id: 2, label: '重烧竖窑2', class: 'type-on' },
            { id: 3, label: '重烧竖窑3', class: 'type-on' },
            { id: 4, label: '重烧竖窑4', class: 'type-on' },
            { id: 5, label: '重烧竖窑5', class: 'type-on' },
            { id: 6, label: '除尘风机1', class: 'type-on' },
            { id: 7, label: '除尘风机2', class: 'type-on' },
            { id: 8, label: '喷淋水泵1', class: 'type-on' },
            { id: 9, label: '喷淋水泵2', class: 'type-on' },
            { id: 10, label: '监控单元1', class: 'type-on' },
            { id: 11, label: '监控单元2', class: 'type-on' }
        ],
        edges: [
            [0, 1],
            [0, 2],
            [0, 3],
            [0, 4],
            [0, 5],
            [1, 6],
            [2, 6],
            [3, 7],
            [4, 7],
            [5, 7],
            [6, 8],
            [7, 9],
            [8, 10],
            [9, 11]
        ],
        errLine: [
        ],
        errNodes: [
        ]
    }

    companyGraphs.dsq030 = {
        nodes: [
            { id: 0, label: '大石桥市恒源耐火材料厂', class: 'type-on' },
            { id: 1, label: '电熔炉', class: 'type-on' },
            { id: 2, label: '除尘风机1', class: 'type-on' },
            { id: 3, label: '监控单元1', class: 'type-on' }
        ],
        edges: [
            [0, 1],
            [1, 2],
            [2, 3]
        ],
        errLine: [
        ],
        errNodes: [
        ]
    }

    companyGraphs.dsq031 = {
        nodes: [
            { id: 0, label: '营口南楼圣深耐火材料厂', class: 'type-on' },
            { id: 1, label: '轻烧窑1', class: 'type-on' },
            { id: 2, label: '轻烧窑2', class: 'type-on' },
            { id: 3, label: '除尘风机1', class: 'type-on' },
            { id: 4, label: '喷淋水泵1', class: 'type-on' },
            { id: 5, label: '监控单元1', class: 'type-on' }
        ],
        edges: [
            [0, 1],
            [0, 2],
            [1, 3],
            [2, 3],
            [3, 4],
            [4, 5]
        ],
        errLine: [
        ],
        errNodes: [
        ]
    }

    companyGraphs.dsq032 = {
        nodes: [
            { id: 0, label: '大石桥市圣兴耐火材料厂', class: 'type-on' },
            { id: 1, label: '轻烧窑1', class: 'type-on' },
            { id: 2, label: '轻烧窑2', class: 'type-on' },
            { id: 3, label: '轻烧窑3', class: 'type-on' },
            { id: 4, label: '轻烧窑4', class: 'type-on' },
            { id: 5, label: '轻烧窑5', class: 'type-on' },
            { id: 6, label: '除尘风机1', class: 'type-on' },
            { id: 7, label: '喷淋水泵1', class: 'type-on' },
            { id: 8, label: '喷淋水泵2', class: 'type-on' },
            { id: 9, label: '监控单元1', class: 'type-on' }
        ],
        edges: [
            [0, 1],
            [0, 2],
            [0, 3],
            [0, 4],
            [0, 5],
            [1, 6],
            [2, 6],
            [3, 6],
            [4, 6],
            [5, 6],
            [6, 7],
            [6, 8],
            [7, 9],
            [8, 9]
        ],
        errLine: [
        ],
        errNodes: [
        ]
    }

    companyGraphs.dsq033 = {
        nodes: [
            { id: 0, label: '营口嘉德耐火材料有限公司', class: 'type-on' },
            { id: 1, label: '重烧竖窑1', class: 'type-on' },
            { id: 2, label: '重烧竖窑2', class: 'type-on' },
            { id: 3, label: '除尘风机1', class: 'type-on' },
            { id: 4, label: '喷淋水泵1(脱硝)', class: 'type-on' },
            { id: 5, label: '喷淋水泵2(脱硫)', class: 'type-on' },
            { id: 6, label: '监控单元1', class: 'type-on' }
        ],
        edges: [
            [0, 1],
            [0, 2],
            [1, 3],
            [2, 3],
            [3, 4],
            [4, 5],
            [5, 6]
        ],
        errLine: [
        ],
        errNodes: [
        ]
    }

    companyGraphs.dsq034 = {
        nodes: [
            { id: 0, label: '大石桥市环科耐火材料有限公司（圣水）', class: 'type-on' },
            { id: 1, label: '电熔炉1', class: 'type-on' },
            { id: 2, label: '电熔炉2', class: 'type-on' },
            { id: 3, label: '除尘风机1', class: 'type-on' },
            { id: 4, label: '除尘风机2', class: 'type-on' },
            { id: 5, label: '监控单元1', class: 'type-on' }
        ],
        edges: [
            [0, 1],
            [0, 2],
            [1, 3],
            [2, 4],
            [3, 5],
            [4, 5]
        ],
        errLine: [
        ],
        errNodes: [
        ]
    }

    companyGraphs.dsq035 = {
        nodes: [
            { id: 0, label: '大石桥市环科耐火材料有限公司（高庄）', class: 'type-on' },
            { id: 1, label: '电熔炉1', class: 'type-on' },
            { id: 2, label: '电熔炉2', class: 'type-on' },
            { id: 3, label: '电熔炉3', class: 'type-on' },
            { id: 4, label: '除尘风机1', class: 'type-on' },
            { id: 5, label: '除尘风机2', class: 'type-on' },
            { id: 6, label: '除尘风机3', class: 'type-on' },
            { id: 7, label: '监控单元1', class: 'type-on' }
        ],
        edges: [
            [0, 1],
            [0, 2],
            [0, 3],
            [1, 4],
            [2, 5],
            [3, 6],
            [4, 7],
            [5, 7],
            [6, 7]
        ],
        errLine: [
        ],
        errNodes: [
        ]
    }

    companyGraphs.dsq036 = {
        nodes: [
            { id: 0, label: '大石桥市盛鑫镁质耐火材料厂', class: 'type-on' },
            { id: 1, label: '重烧竖窑1', class: 'type-on' },
            { id: 2, label: '除尘风机1', class: 'type-on' },
            { id: 3, label: '喷淋水泵1', class: 'type-on' },
            { id: 4, label: '监控单元1', class: 'type-on' }
        ],
        edges: [
            [0, 1],
            [1, 2],
            [2, 3],
            [3, 4]
        ],
        errLine: [
        ],
        errNodes: [
        ]
    }

    companyGraphs.dsq037 = {
        nodes: [
            { id: 0, label: '大石桥市群力镁制品有限公司', class: 'type-on' },
            { id: 1, label: '电熔炉1', class: 'type-on' },
            { id: 2, label: '电熔炉2', class: 'type-on' },
            { id: 3, label: '除尘风机1', class: 'type-on' },
            { id: 4, label: '除尘风机2', class: 'type-on' },
            { id: 5, label: '监控单元1', class: 'type-on' }
        ],
        edges: [
            [0, 1],
            [0, 2],
            [1, 3],
            [2, 4],
            [3, 5],
            [4, 5]
        ],
        errLine: [
        ],
        errNodes: [
        ]
    }

    companyGraphs.dsq038 = {
        nodes: [
            { id: 0, label: '大石桥市鸿运达耐火材料有限公司', class: 'type-on' },
            { id: 1, label: '轻烧窑1', class: 'type-on' },
            { id: 2, label: '轻烧窑2', class: 'type-on' },
            { id: 3, label: '轻烧窑3', class: 'type-on' },
            { id: 4, label: '除尘风机1', class: 'type-on' },
            { id: 5, label: '喷淋水泵1', class: 'type-on' },
            { id: 6, label: '喷淋水泵2', class: 'type-on' },
            { id: 7, label: '监控单元1', class: 'type-on' }
        ],
        edges: [
            [0, 1],
            [0, 2],
            [0, 3],
            [1, 4],
            [2, 4],
            [3, 4],
            [4, 5],
            [4, 6],
            [5, 7],
            [6, 7]
        ],
        errLine: [
        ],
        errNodes: [
        ]
    }

    companyGraphs.dsq039 = {
        nodes: [
            { id: 0, label: '营口东祥镁制品材料有限公司', class: 'type-on' },
            { id: 1, label: '重烧竖窑1', class: 'type-on' },
            { id: 2, label: '除尘风机1', class: 'type-on' },
            { id: 3, label: '喷淋水泵1', class: 'type-on' },
            { id: 4, label: '监控单元1', class: 'type-on' }
        ],
        edges: [
            [0, 1],
            [1, 2],
            [2, 3],
            [3, 4]
        ],
        errLine: [
        ],
        errNodes: [
        ]
    }

    companyGraphs.dsq040 = {
        nodes: [
            { id: 0, label: '营口鼎丰冶金科技有限公司', class: 'type-on' },
            { id: 1, label: '重烧竖窑1', class: 'type-on' },
            { id: 2, label: '重烧竖窑2', class: 'type-on' },
            { id: 3, label: '除尘风机1', class: 'type-on' },
            { id: 4, label: '喷淋水泵1', class: 'type-on' },
            { id: 5, label: '监控单元1', class: 'type-on' }
        ],
        edges: [
            [0, 1],
            [0, 2],
            [1, 3],
            [2, 3],
            [3, 4],
            [4, 5]
        ],
        errLine: [
        ],
        errNodes: [
        ]
    }

    companyGraphs.dsq041 = {
        nodes: [
            { id: 0, label: '大石桥市鸿锦耐火材料有限公司', class: 'type-on' },
            { id: 1, label: '重烧竖窑1', class: 'type-on' },
            { id: 2, label: '重烧竖窑2', class: 'type-on' },
            { id: 3, label: '除尘风机1', class: 'type-on' },
            { id: 4, label: '喷淋水泵1', class: 'type-on' },
            { id: 5, label: '喷淋水泵2', class: 'type-on' },
            { id: 6, label: '喷淋水泵3', class: 'type-on' },
            { id: 7, label: '监控单元1', class: 'type-on' }
        ],
        edges: [
            [0, 1],
            [0, 2],
            [1, 3],
            [2, 3],
            [3, 4],
            [3, 5],
            [3, 6],
            [4, 7],
            [5, 7],
            [6, 7]
        ],
        errLine: [
        ],
        errNodes: [
        ]
    }

    companyGraphs.dsq042 = {
        nodes: [
            { id: 0, label: '大石桥市鑫路源耐火材料厂', class: 'type-on' },
            { id: 1, label: '电熔炉1', class: 'type-on' },
            { id: 2, label: '电熔炉2', class: 'type-on' },
            { id: 3, label: '除尘风机1', class: 'type-on' },
            { id: 4, label: '监控单元1', class: 'type-on' }
        ],
        edges: [
            [0, 1],
            [0, 2],
            [1, 3],
            [2, 3],
            [3, 4]
        ],
        errLine: [
        ],
        errNodes: [
        ]
    }

    companyGraphs.dsq043 = { 'nodes': [{ 'id': 0, 'label': '轻烧窑1', 'class': 'type-on' }, { 'id': 1, 'label': '轻烧窑2', 'class': 'type-on' }, { 'id': 2, 'label': '轻烧窑3', 'class': 'type-on' }, { 'id': 3, 'label': '轻烧窑4', 'class': 'type-on' }, { 'id': 4, 'label': '除尘风机1', 'class': 'type-on' }, { 'id': 5, 'label': '喷淋水泵1', 'class': 'type-on' }, { 'id': 6, 'label': '喷淋水泵2', 'class': 'type-on' }, { 'id': 7, 'label': '喷淋水泵3', 'class': 'type-on' }, { 'id': 8, 'label': '喷淋水泵4', 'class': 'type-on' }, { 'id': 9, 'label': '大石桥市南楼秀春矿产品加工厂', 'class': 'type-on' }], 'edges': [[0, 4], [1, 4], [2, 4], [3, 4], [4, 5], [4, 6], [4, 7], [4, 8]], 'errLine': [], 'errNodes': [] }

    companyGraphs.dsq044 = {
        nodes: [
            { id: 0, label: '大石桥市华镁菱镁粉厂', class: 'type-on' },
            { id: 1, label: '重烧竖窑1', class: 'type-on' },
            { id: 2, label: '重烧竖窑2', class: 'type-on' },
            { id: 3, label: '轻烧窑1', class: 'type-on' },
            { id: 4, label: '轻烧窑2', class: 'type-on' },
            { id: 5, label: '轻烧窑3', class: 'type-on' },
            { id: 6, label: '除尘风机1', class: 'type-on' },
            { id: 7, label: '喷淋水泵1', class: 'type-on' },
            { id: 8, label: '喷淋水泵2', class: 'type-on' },
            { id: 9, label: '喷淋水泵3', class: 'type-on' },
            { id: 10, label: '监控单元1', class: 'type-on' }
        ],
        edges: [
            [0, 1],
            [0, 2],
            [0, 3],
            [0, 4],
            [0, 5],
            [1, 6],
            [2, 6],
            [3, 6],
            [4, 6],
            [5, 6],
            [6, 7],
            [6, 8],
            [6, 9],
            [7, 10],
            [8, 10],
            [9, 10]
        ],
        errLine: [
        ],
        errNodes: [
        ]
    }

    companyGraphs.dsq045 = {
        nodes: [
            { id: 0, label: '营口洪峰耐火材料有限公司', class: 'type-on' },
            { id: 1, label: '轻烧窑1', class: 'type-on' },
            { id: 2, label: '轻烧窑2', class: 'type-on' },
            { id: 3, label: '除尘风机1', class: 'type-on' },
            { id: 4, label: '喷淋水泵1', class: 'type-on' },
            { id: 5, label: '监控单元1', class: 'type-on' }
        ],
        edges: [
            [0, 1],
            [0, 2],
            [1, 3],
            [2, 3],
            [3, 4],
            [4, 5]
        ],
        errLine: [
        ],
        errNodes: [
        ]
    }

    companyGraphs.dsq046 = { 'nodes': [{ 'id': 0, 'label': '电熔炉1', 'class': 'type-on' }, { 'id': 1, 'label': '电熔炉2', 'class': 'type-on' }, { 'id': 2, 'label': '电熔炉3', 'class': 'type-on' }, { 'id': 3, 'label': '电熔炉4', 'class': 'type-on' }, { 'id': 4, 'label': '除尘风机1', 'class': 'type-on' }, { 'id': 5, 'label': '除尘风机2', 'class': 'type-on' }, { 'id': 6, 'label': '除尘风机3', 'class': 'type-on' }, { 'id': 7, 'label': '除尘风机4', 'class': 'type-on' }, { 'id': 8, 'label': '大石桥市鑫泰耐火材料有限公司水源分公司', 'class': 'type-on' }], 'edges': [[0, 4], [1, 5], [2, 6], [3, 7]], 'errLine': [], 'errNodes': [] }

    companyGraphs.dsq047 = { 'nodes': [{ 'id': 0, 'label': '电熔炉1', 'class': 'type-on' }, { 'id': 1, 'label': '电熔炉2', 'class': 'type-on' }, { 'id': 2, 'label': '电熔炉3', 'class': 'type-on' }, { 'id': 3, 'label': '除尘风机1', 'class': 'type-on' }, { 'id': 4, 'label': '除尘风机2', 'class': 'type-on' }, { 'id': 5, 'label': '除尘风机3', 'class': 'type-on' }, { 'id': 6, 'label': '大石桥市鑫泰耐火材料有限公司', 'class': 'type-on' }], 'edges': [[0, 3], [1, 4], [2, 5]], 'errLine': [], 'errNodes': [] }

    companyGraphs.dsq048 = { 'nodes': [{ 'id': 0, 'label': '电熔炉1', 'class': 'type-on' }, { 'id': 1, 'label': '电熔炉2', 'class': 'type-on' }, { 'id': 2, 'label': '电熔炉3', 'class': 'type-on' }, { 'id': 3, 'label': '除尘风机1', 'class': 'type-on' }, { 'id': 4, 'label': '除尘风机2', 'class': 'type-on' }, { 'id': 5, 'label': '营口荣昌耐火材料有限公司', 'class': 'type-on' }], 'edges': [[0, 3], [0, 4], [1, 3], [1, 4], [2, 3], [2, 4]], 'errLine': [], 'errNodes': [] }

    companyGraphs.dsq049 = {
        nodes: [
            { id: 0, label: '辽宁靓博科技股份有限公司', class: 'type-on' },
            { id: 1, label: '轻烧窑1', class: 'type-on' },
            { id: 2, label: '轻烧窑2', class: 'type-on' },
            { id: 3, label: '轻烧窑3', class: 'type-on' },
            { id: 4, label: '轻烧窑4', class: 'type-on' },
            { id: 5, label: '轻烧窑5', class: 'type-on' },
            { id: 6, label: '轻烧窑6', class: 'type-on' },
            { id: 7, label: '轻烧窑7', class: 'type-on' },
            { id: 8, label: '轻烧窑7', class: 'type-on' },
            { id: 9, label: '重烧竖窑1', class: 'type-on' },
            { id: 10, label: '重烧竖窑2', class: 'type-on' },
            { id: 11, label: '除尘风机1', class: 'type-on' },
            { id: 12, label: '除尘风机2', class: 'type-on' },
            { id: 13, label: '喷淋水泵1', class: 'type-on' },
            { id: 14, label: '喷淋水泵2', class: 'type-on' },
            { id: 15, label: '喷淋水泵3', class: 'type-on' },
            { id: 16, label: '监控单元1', class: 'type-on' },
            { id: 17, label: '监控单元2', class: 'type-on' }
        ],
        edges: [
            [0, 1],
            [0, 2],
            [0, 3],
            [0, 4],
            [0, 5],
            [0, 6],
            [0, 7],
            [0, 8],
            [0, 9],
            [0, 10],
            [1, 11],
            [2, 11],
            [9, 11],
            [10, 11],
            [3, 12],
            [4, 12],
            [5, 12],
            [6, 12],
            [7, 12],
            [8, 12],
            [11, 13],
            [12, 14],
            [12, 15],
            [13, 16],
            [14, 17],
            [15, 17]
        ],
        errLine: [
        ],
        errNodes: [
        ]
    }

    companyGraphs.dsq050 = {
        nodes: [
            { id: 0, label: '营口南楼经济开发区兴旺氧化镁厂', class: 'type-on' },
            { id: 1, label: '轻烧窑1', class: 'type-on' },
            { id: 2, label: '轻烧窑2', class: 'type-on' },
            { id: 3, label: '除尘风机1', class: 'type-on' },
            { id: 4, label: '喷淋水泵1', class: 'type-on' },
            { id: 5, label: '监控单元1', class: 'type-on' }
        ],
        edges: [
            [0, 1],
            [0, 2],
            [1, 3],
            [2, 3],
            [3, 4],
            [4, 5]
        ],
        errLine: [
        ],
        errNodes: [
        ]
    }

    companyGraphs.dsq051 = {
        nodes: [
            { id: 0, label: '营口华东镁质材料有限公司', class: 'type-on' },
            { id: 1, label: '重烧竖窑1', class: 'type-on' },
            { id: 2, label: '重烧竖窑2', class: 'type-on' },
            { id: 3, label: '除尘风机1', class: 'type-on' },
            { id: 4, label: '喷淋水泵1', class: 'type-on' },
            { id: 5, label: '喷淋水泵2', class: 'type-on' },
            { id: 6, label: '监控单元1', class: 'type-on' }
        ],
        edges: [
            [0, 1],
            [0, 2],
            [1, 3],
            [2, 3],
            [3, 4],
            [3, 5],
            [4, 6],
            [5, 6]
        ],
        errLine: [
        ],
        errNodes: [
        ]
    }

    companyGraphs.dsq052 = { 'nodes': [{ 'id': 0, 'label': '电熔炉1', 'class': 'type-on' }, { 'id': 1, 'label': '电熔炉2', 'class': 'type-on' }, { 'id': 2, 'label': '除尘风机1', 'class': 'type-on' }, { 'id': 3, 'label': '除尘风机2', 'class': 'type-on' }, { 'id': 4, 'label': '除尘风机3', 'class': 'type-on' }, { 'id': 5, 'label': '大石桥市鸿源耐火材料有限公司', 'class': 'type-on' }], 'edges': [[0, 2], [0, 3], [0, 4], [1, 2], [1, 3], [1, 4], [5, 0], [5, 1]], 'errLine': [], 'errNodes': [] }

    companyGraphs.dsq053 = { 'nodes': [{ 'id': 0, 'label': '轻烧窑1', 'class': 'type-on' }, { 'id': 1, 'label': '轻烧窑2', 'class': 'type-on' }, { 'id': 2, 'label': '轻烧窑3', 'class': 'type-on' }, { 'id': 3, 'label': '除尘风机1', 'class': 'type-on' }, { 'id': 4, 'label': '脱硫水泵1', 'class': 'type-on' }, { 'id': 5, 'label': '脱硫水泵2', 'class': 'type-on' }, { 'id': 6, 'label': '营口南楼亿森镁制品厂', 'class': 'type-on' }], 'edges': [[0, 3], [1, 3], [2, 3], [3, 4], [3, 5]], 'errLine': [], 'errNodes': [] }

    companyGraphs.dsq054 = { 'nodes': [{ 'id': 0, 'label': '轻烧窑1', 'class': 'type-on' }, { 'id': 1, 'label': '轻烧窑2', 'class': 'type-on' }, { 'id': 3, 'label': '除尘风机1', 'class': 'type-on' }, { 'id': 4, 'label': '喷淋水泵1', 'class': 'type-on' }, { 'id': 5, 'label': '喷淋水泵2', 'class': 'type-on' }, { 'id': 6, 'label': '喷淋水泵3', 'class': 'type-on' }, { 'id': 7, 'label': '营口南楼兴旭耐火材料厂', 'class': 'type-on' }, { 'id': 8, 'label': '镭蒙', 'class': 'type-on' }, { 'id': 9, 'label': '除尘风机', 'class': 'type-on' }], 'edges': [[0, 3], [1, 3], [3, 4], [3, 5], [3, 6], [7, 0], [7, 1], [8, 9], [7, 8]], 'errLine': [], 'errNodes': [] }

    companyGraphs.dsq055 = {
        nodes: [
            { id: 0, label: '大石桥市飞达耐火材料厂', class: 'type-on' },
            { id: 1, label: '轻烧窑1', class: 'type-on' },
            { id: 2, label: '轻烧窑2', class: 'type-on' },
            { id: 3, label: '轻烧窑3', class: 'type-on' },
            { id: 4, label: '轻烧窑4', class: 'type-on' },
            { id: 5, label: '轻烧窑5', class: 'type-on' },
            { id: 6, label: '轻烧窑6', class: 'type-on' },
            { id: 7, label: '轻烧窑7', class: 'type-on' },
            { id: 8, label: '轻烧窑8', class: 'type-on' },
            { id: 9, label: '轻烧窑9', class: 'type-on' },
            { id: 10, label: '轻烧窑10', class: 'type-on' },
            { id: 11, label: '轻烧窑11', class: 'type-on' },
            { id: 12, label: '轻烧窑12', class: 'type-on' },
            { id: 13, label: '轻烧窑13', class: 'type-on' },
            { id: 14, label: '轻烧窑14', class: 'type-on' },
            { id: 15, label: '轻烧窑15', class: 'type-on' },
            { id: 16, label: '轻烧窑16', class: 'type-on' },
            { id: 17, label: '轻烧窑17', class: 'type-on' },
            { id: 18, label: '轻烧窑18', class: 'type-on' },
            { id: 19, label: '除尘风机1', class: 'type-on' },
            { id: 20, label: '除尘风机2', class: 'type-on' },
            { id: 21, label: '喷淋水泵1', class: 'type-on' },
            { id: 22, label: '喷淋水泵2', class: 'type-on' },
            { id: 23, label: '喷淋水泵3', class: 'type-on' },
            { id: 24, label: '监控单元1', class: 'type-on' },
            { id: 25, label: '监控单元2', class: 'type-on' },
            { id: 26, label: '监控单元3', class: 'type-on' }
        ],
        edges: [
            [0, 1],
            [0, 2],
            [0, 3],
            [0, 4],
            [0, 5],
            [0, 6],
            [0, 7],
            [0, 8],
            [0, 9],
            [0, 10],
            [0, 11],
            [0, 12],
            [0, 13],
            [0, 14],
            [0, 15],
            [0, 16],
            [0, 17],
            [0, 18],
            [1, 19],
            [2, 19],
            [3, 20],
            [4, 20],
            [5, 20],
            [6, 20],
            [7, 26],
            [8, 26],
            [9, 26],
            [10, 26],
            [11, 26],
            [12, 26],
            [13, 26],
            [14, 26],
            [15, 26],
            [16, 26],
            [17, 26],
            [18, 26],
            [19, 21],
            [19, 22],
            [21, 24],
            [22, 24],
            [20, 23],
            [23, 25]
        ],
        errLine: [
        ],
        errNodes: [
        ]
    }

    companyGraphs.dsq056 = {
        nodes: [
            { id: 0, label: '大石桥市博炀耐火材料有限公司', class: 'type-on' },
            { id: 1, label: '电熔炉1', class: 'type-on' },
            { id: 2, label: '电熔炉2', class: 'type-on' },
            { id: 3, label: '除尘风机1', class: 'type-on' },
            { id: 4, label: '监控单元1', class: 'type-on' }
        ],
        edges: [
            [0, 1],
            [0, 2],
            [1, 3],
            [2, 3],
            [3, 4]
        ],
        errLine: [
        ],
        errNodes: [
        ]
    }

    companyGraphs.dsq057 = {
        nodes: [
            { id: 0, label: '大石桥市青源矿产耐材有限公司', class: 'type-on' },
            { id: 1, label: '重烧竖窑1', class: 'type-on' },
            { id: 2, label: '除尘风机1', class: 'type-on' },
            { id: 3, label: '喷淋水泵1', class: 'type-on' },
            { id: 4, label: '监控单元1', class: 'type-on' }
        ],
        edges: [
            [0, 1],
            [1, 2],
            [2, 3],
            [3, 4]
        ],
        errLine: [
        ],
        errNodes: [
        ]
    }

    companyGraphs.dsq058 = { 'nodes': [{ 'id': 0, 'label': '生产风机1', 'class': 'type-on' }, { 'id': 1, 'label': '生产风机2', 'class': 'type-on' }, { 'id': 2, 'label': '生产风机3', 'class': 'type-on' }, { 'id': 3, 'label': '除尘风机1', 'class': 'type-on' }, { 'id': 4, 'label': '除尘风机2', 'class': 'type-on' }, { 'id': 5, 'label': '除尘风机3', 'class': 'type-on' }, { 'id': 6, 'label': '营口顺发铝业有限公司', 'class': 'type-on' }], 'edges': [[0, 3], [0, 4], [0, 5], [1, 3], [1, 4], [1, 5], [2, 3], [2, 4], [2, 5], [6, 0], [6, 1], [6, 2]], 'errLine': [], 'errNodes': [] }

    companyGraphs.dsq059 = {
        nodes: [
            { id: 0, label: '营口众安镁业有限责任公司', class: 'type-on' },
            { id: 1, label: '重烧竖窑1', class: 'type-on' },
            { id: 2, label: '重烧竖窑2', class: 'type-on' },
            { id: 3, label: '重烧竖窑3', class: 'type-on' },
            { id: 4, label: '重烧竖窑4', class: 'type-on' },
            { id: 5, label: '重烧竖窑5', class: 'type-on' },
            { id: 6, label: '除尘风机1', class: 'type-on' },
            { id: 7, label: '除尘风机2', class: 'type-on' },
            { id: 8, label: '喷淋水泵(主)', class: 'type-on' },
            { id: 9, label: '喷淋水泵(备)', class: 'type-on' },
            { id: 10, label: '监控单元1', class: 'type-on' }
        ],
        edges: [
            [0, 1],
            [0, 2],
            [0, 3],
            [0, 4],
            [0, 5],
            [1, 6],
            [2, 6],
            [3, 6],
            [4, 6],
            [5, 6],
            [1, 7],
            [2, 7],
            [3, 7],
            [4, 7],
            [5, 7],
            [6, 8],
            [7, 8],
            [6, 9],
            [7, 9],
            [8, 10],
            [9, 10]
        ],
        errLine: [
        ],
        errNodes: [
        ]
    }

    companyGraphs.dsq060 = {
        nodes: [
            { id: 0, label: '大石桥市金兴矿产品加工厂', class: 'type-on' },
            { id: 1, label: '重烧竖窑1', class: 'type-on' },
            { id: 2, label: '除尘风机1', class: 'type-on' },
            { id: 3, label: '喷淋水泵1', class: 'type-on' },
            { id: 4, label: '监控单元1', class: 'type-on' }
        ],
        edges: [
            [0, 1],
            [1, 2],
            [2, 3],
            [3, 4]
        ],
        errLine: [
        ],
        errNodes: [
        ]
    }

    companyGraphs.dsq061 = {
        nodes: [
            { id: 0, label: '营口菱镁化工集团有限公司', class: 'type-on' },
            { id: 1, label: '轻烧窑1', class: 'type-on' },
            { id: 2, label: '轻烧窑2', class: 'type-on' },
            { id: 3, label: '除尘风机1', class: 'type-on' },
            { id: 4, label: '喷淋水泵1', class: 'type-on' },
            { id: 5, label: '监控单元1', class: 'type-on' }
        ],
        edges: [
            [0, 1],
            [0, 2],
            [1, 3],
            [2, 3],
            [3, 4],
            [4, 5]
        ],
        errLine: [
        ],
        errNodes: [
        ]
    }

    companyGraphs.dsq062 = { 'nodes': [{ 'id': 0, 'label': '重烧竖窑1', 'class': 'type-on' }, { 'id': 1, 'label': '重烧竖窑2', 'class': 'type-on' }, { 'id': 2, 'label': '除尘风机1', 'class': 'type-on' }, { 'id': 3, 'label': '喷淋水泵1', 'class': 'type-on' }, { 'id': 4, 'label': '大石桥金瑞耐火材料有限公司', 'class': 'type-on' }], 'edges': [[4, 0], [4, 1], [0, 2], [1, 2], [2, 3]], 'errLine': [], 'errNodes': [] }

    companyGraphs.dsq063 = {
        nodes: [
            { id: 0, label: '大石桥市韦达耐火材料有限责任公司', class: 'type-on' },
            { id: 1, label: '重烧竖窑1', class: 'type-on' },
            { id: 2, label: '除尘风机1', class: 'type-on' },
            { id: 3, label: '喷淋水泵1', class: 'type-on' },
            { id: 4, label: '喷淋水泵2', class: 'type-on' },
            { id: 5, label: '喷淋水泵3', class: 'type-on' },
            { id: 6, label: '喷淋水泵4', class: 'type-on' },
            { id: 7, label: '监控单元1', class: 'type-on' }
        ],
        edges: [
            [0, 1],
            [1, 2],
            [2, 3],
            [2, 4],
            [2, 5],
            [2, 6],
            [3, 7],
            [4, 7],
            [5, 7],
            [6, 7]
        ],
        errLine: [
        ],
        errNodes: [
        ]
    }

    companyGraphs.dsq064 = { 'nodes': [{ 'id': 0, 'label': '大石桥市新运耐火材料厂', 'class': 'type-on' }, { 'id': 1, 'label': '重烧竖窑1', 'class': 'type-on' }, { 'id': 2, 'label': '重烧竖窑2', 'class': 'type-on' }, { 'id': 3, 'label': '除尘风机1', 'class': 'type-on' }, { 'id': 4, 'label': '喷淋水泵1', 'class': 'type-on' }], 'edges': [[1, 3], [2, 3], [3, 4], [0, 1], [0, 2]], 'errLine': [], 'errNodes': [] }

    companyGraphs.dsq065 = { 'nodes': [{ 'id': 0, 'label': '大石桥中建镁砖有限公司', 'class': 'type-on' }, { 'id': 1, 'label': '隧道窑1', 'class': 'type-on' }, { 'id': 2, 'label': '隧道窑2', 'class': 'type-on' }, { 'id': 3, 'label': '隧道窑3', 'class': 'type-on' }, { 'id': 4, 'label': '隧道窑4', 'class': 'type-on' }, { 'id': 5, 'label': '除尘风机', 'class': 'type-on' }, { 'id': 6, 'label': '脱硝风机', 'class': 'type-on' }], 'edges': [[1, 5], [2, 5], [3, 5], [4, 5], [5, 6], [0, 1], [0, 2], [0, 3], [0, 4]], 'errLine': [], 'errNodes': [] }

    companyGraphs.dsq066 = {
        nodes: [
            { id: 0, label: '大石桥市锦程耐火材料厂', class: 'type-on' },
            { id: 1, label: '重烧竖窑1', class: 'type-on' },
            { id: 2, label: '重烧竖窑2', class: 'type-on' },
            { id: 3, label: '重烧竖窑3', class: 'type-on' },
            { id: 4, label: '轻烧窑1', class: 'type-on' },
            { id: 5, label: '轻烧窑2', class: 'type-on' },
            { id: 6, label: '轻烧窑3', class: 'type-on' },
            { id: 7, label: '轻烧窑4', class: 'type-on' },
            { id: 8, label: '轻烧窑5', class: 'type-on' },
            { id: 9, label: '轻烧窑6', class: 'type-on' },
            { id: 10, label: '除尘风机1', class: 'type-on' },
            { id: 11, label: '除尘风机2', class: 'type-on' },
            { id: 12, label: '喷淋水泵1', class: 'type-on' },
            { id: 13, label: '喷淋水泵2', class: 'type-on' },
            { id: 14, label: '喷淋水泵3', class: 'type-on' },
            { id: 15, label: '喷淋水泵4', class: 'type-on' },
            { id: 16, label: '监控单元1', class: 'type-on' },
            { id: 17, label: '监控单元2', class: 'type-on' }
        ],
        edges: [
            [0, 1],
            [0, 2],
            [0, 3],
            [0, 4],
            [0, 5],
            [0, 6],
            [0, 7],
            [0, 8],
            [0, 9],
            [1, 10],
            [2, 10],
            [3, 10],
            [4, 11],
            [5, 11],
            [6, 11],
            [7, 11],
            [8, 11],
            [9, 11],
            [10, 12],
            [10, 13],
            [11, 14],
            [11, 15],
            [12, 16],
            [13, 16],
            [14, 17],
            [15, 17]
        ],
        errLine: [
        ],
        errNodes: [
        ]
    }

    companyGraphs.dsq067 = {
        nodes: [
            { id: 0, label: '大石桥市大岭旭日滑石粉厂', class: 'type-on' },
            { id: 1, label: '轻烧窑1', class: 'type-on' },
            { id: 2, label: '轻烧窑2', class: 'type-on' },
            { id: 3, label: '轻烧窑3', class: 'type-on' },
            { id: 4, label: '轻烧窑4', class: 'type-on' },
            { id: 5, label: '轻烧窑5', class: 'type-on' },
            { id: 6, label: '轻烧窑6', class: 'type-on' },
            { id: 7, label: '除尘风机1', class: 'type-on' },
            { id: 8, label: '喷淋水泵1', class: 'type-on' },
            { id: 9, label: '监控单元1', class: 'type-on' }
        ],
        edges: [
            [0, 1],
            [0, 2],
            [0, 3],
            [0, 4],
            [0, 5],
            [0, 6],
            [1, 7],
            [2, 7],
            [3, 7],
            [4, 7],
            [5, 7],
            [6, 7],
            [7, 8],
            [8, 9]
        ],
        errLine: [
        ],
        errNodes: [
        ]
    }

    companyGraphs.dsq068 = {
        nodes: [
            { id: 0, label: '营口磊旋耐火材料有限公司', class: 'type-on' },
            { id: 1, label: '轻烧窑1', class: 'type-on' },
            { id: 2, label: '除尘风机1', class: 'type-on' },
            { id: 3, label: '喷淋水泵1', class: 'type-on' },
            { id: 4, label: '喷淋水泵2', class: 'type-on' },
            { id: 5, label: '喷淋水泵3', class: 'type-on' },
            { id: 6, label: '喷淋水泵4', class: 'type-on' },
            { id: 7, label: '喷淋水泵5', class: 'type-on' },
            { id: 8, label: '监控单元1', class: 'type-on' }
        ],
        edges: [
            [0, 1],
            [1, 2],
            [2, 3],
            [2, 4],
            [2, 5],
            [2, 6],
            [2, 7],
            [3, 8],
            [4, 8],
            [5, 8],
            [6, 8],
            [7, 8]
        ],
        errLine: [
        ],
        errNodes: [
        ]
    }

    companyGraphs.dsq069 = {
        nodes: [
            { id: 0, label: '营口贺祥耐火材料有限公司', class: 'type-on' },
            { id: 1, label: '轻烧窑1', class: 'type-on' },
            { id: 2, label: '轻烧窑2', class: 'type-on' },
            { id: 3, label: '轻烧窑3', class: 'type-on' },
            { id: 4, label: '轻烧窑4', class: 'type-on' },
            { id: 5, label: '轻烧窑5', class: 'type-on' },
            { id: 6, label: '轻烧窑6', class: 'type-on' },
            { id: 7, label: '除尘风机1', class: 'type-on' },
            { id: 8, label: '喷淋水泵1', class: 'type-on' },
            { id: 9, label: '监控单元1', class: 'type-on' }
        ],
        edges: [
            [0, 1],
            [0, 2],
            [0, 3],
            [0, 4],
            [0, 5],
            [0, 6],
            [1, 7],
            [2, 7],
            [3, 7],
            [4, 7],
            [5, 7],
            [6, 7],
            [7, 8],
            [8, 9]
        ],
        errLine: [
        ],
        errNodes: [
        ]
    }

    companyGraphs.dsq070 = { 'nodes': [{ 'id': 0, 'label': '大石桥市东窑特耐厂', 'class': 'type-on' }, { 'id': 1, 'label': '电熔炉1', 'class': 'type-on' }, { 'id': 2, 'label': '除尘风机1', 'class': 'type-on' }], 'edges': [[0, 1], [1, 2]], 'errLine': [], 'errNodes': [] }

    companyGraphs.dsq071 = {
        nodes: [
            { id: 0, label: '营口方晨耐火材料有限公司', class: 'type-on' },
            { id: 1, label: '重烧竖窑1', class: 'type-on' },
            { id: 2, label: '重烧竖窑2', class: 'type-on' },
            { id: 3, label: '除尘风机', class: 'type-on' },
            { id: 4, label: '脱硫水泵1', class: 'type-on' },
            { id: 5, label: '脱硫水泵2', class: 'type-on' },
            { id: 6, label: '脱硫水泵(备)', class: 'type-on' },
            { id: 7, label: '脱硝水泵', class: 'type-on' },
            { id: 8, label: '脱硝水泵(备)', class: 'type-on' },
            { id: 9, label: '监控单元1', class: 'type-on' }
        ],
        edges: [
            [0, 1],
            [0, 2],
            [1, 3],
            [2, 3],
            [3, 4],
            [3, 5],
            [3, 6],
            [4, 7],
            [5, 7],
            [6, 7],
            [4, 8],
            [5, 8],
            [6, 8],
            [7, 9],
            [8, 9]
        ],
        errLine: [
        ],
        errNodes: [
        ]
    }

    companyGraphs.dsq072 = { 'nodes': [{ 'id': 0, 'label': '大石桥市群森科技材料有限公司', 'class': 'type-on' }, { 'id': 1, 'label': '重烧竖窑1', 'class': 'type-on' }, { 'id': 2, 'label': '重烧竖窑2', 'class': 'type-on' }, { 'id': 3, 'label': '除尘风机1', 'class': 'type-on' }, { 'id': 4, 'label': '喷淋水泵1', 'class': 'type-on' }, { 'id': 5, 'label': '喷淋水泵2', 'class': 'type-on' }], 'edges': [[0, 1], [0, 2], [1, 3], [2, 3], [3, 4], [3, 5]], 'errLine': [], 'errNodes': [] }

    companyGraphs.dsq073 = {
        nodes: [
            { id: 0, label: '辽宁中镁高温材料有限公司', class: 'type-on' },
            { id: 1, label: '隧道窑1（主）', class: 'type-on' },
            { id: 2, label: '隧道窑1（备）', class: 'type-on' },
            { id: 3, label: '隧道窑2（主）', class: 'type-on' },
            { id: 4, label: '隧道窑2（备）', class: 'type-on' },
            { id: 5, label: '除尘风机1', class: 'type-on' },
            { id: 6, label: '监控单元1', class: 'type-on' }
        ],
        edges: [
            [0, 1],
            [0, 2],
            [0, 3],
            [0, 4],
            [1, 5],
            [2, 5],
            [3, 5],
            [4, 5],
            [5, 6]
        ],
        errLine: [
        ],
        errNodes: [
        ]
    }

    companyGraphs.dsq074 = {
        nodes: [
            { id: 0, label: '营口高鑫镁业有限公司', class: 'type-on' },
            { id: 1, label: '轻烧窑1', class: 'type-on' },
            { id: 2, label: '轻烧窑2', class: 'type-on' },
            { id: 3, label: '轻烧窑3', class: 'type-on' },
            { id: 4, label: '除尘风机1', class: 'type-on' },
            { id: 5, label: '喷淋水泵1', class: 'type-on' },
            { id: 6, label: '监控单元1', class: 'type-on' }
        ],
        edges: [
            [0, 1],
            [0, 2],
            [0, 3],
            [1, 4],
            [2, 4],
            [3, 4],
            [4, 5],
            [5, 6]
        ],
        errLine: [
        ],
        errNodes: [
        ]
    }

    companyGraphs.dsq075 = { 'nodes': [{ 'id': 0, 'label': '营口和平三华矿场有限公司', 'class': 'type-on' }, { 'id': 1, 'label': '重烧竖窑1', 'class': 'type-on' }, { 'id': 2, 'label': '除尘风机1', 'class': 'type-on' }, { 'id': 3, 'label': '喷淋水泵1', 'class': 'type-on' }, { 'id': 4, 'label': '喷淋水泵2', 'class': 'type-on' }, { 'id': 5, 'label': '喷淋水泵3', 'class': 'type-on' }, { 'id': 6, 'label': '喷淋水泵4', 'class': 'type-on' }], 'edges': [[0, 1], [1, 2], [2, 3], [2, 4], [2, 5], [2, 6]], 'errLine': [], 'errNodes': [] }

    companyGraphs.dsq076 = {
        nodes: [
            { id: 0, label: '大石桥市盛达矿业有限公司', class: 'type-on' },
            { id: 1, label: '重烧竖窑1', class: 'type-on' },
            { id: 2, label: '重烧竖窑2', class: 'type-on' },
            { id: 3, label: '重烧竖窑3', class: 'type-on' },
            { id: 4, label: '轻烧窑1', class: 'type-on' },
            { id: 5, label: '轻烧窑2', class: 'type-on' },
            { id: 6, label: '轻烧窑3', class: 'type-on' },
            { id: 7, label: '轻烧窑4', class: 'type-on' },
            { id: 8, label: '轻烧窑5', class: 'type-on' },
            { id: 9, label: '除尘风机1', class: 'type-on' },
            { id: 10, label: '除尘风机2', class: 'type-on' },
            { id: 11, label: '喷淋水泵1', class: 'type-on' },
            { id: 12, label: '喷淋水泵2', class: 'type-on' },
            { id: 13, label: '喷淋水泵3', class: 'type-on' },
            { id: 14, label: '喷淋水泵4', class: 'type-on' },
            { id: 15, label: '监控单元1', class: 'type-on' },
            { id: 16, label: '监控单元2', class: 'type-on' }
        ],
        edges: [
            [0, 1],
            [0, 2],
            [0, 3],
            [0, 4],
            [0, 5],
            [0, 6],
            [0, 7],
            [0, 8],
            [1, 10],
            [2, 10],
            [3, 10],
            [4, 9],
            [5, 9],
            [6, 9],
            [7, 9],
            [8, 9],
            [9, 11],
            [9, 12],
            [10, 13],
            [10, 14],
            [11, 15],
            [12, 15],
            [13, 16],
            [14, 16]
        ],
        errLine: [
        ],
        errNodes: [
        ]
    }

    companyGraphs.dsq077 = {
        nodes: [
            { id: 0, label: '营口南楼大隆耐火材料厂', class: 'type-on' },
            { id: 1, label: '除尘风机1', class: 'type-on' },
            { id: 2, label: '监控单元1', class: 'type-on' }
        ],
        edges: [
            [0, 1],
            [1, 2]
        ],
        errLine: [
        ],
        errNodes: [
        ]
    }

    companyGraphs.dsq078 = {
        nodes: [
            { id: 0, label: '辽宁镁基新型材料有限公司', class: 'type-on' },
            { id: 1, label: '轻烧窑1', class: 'type-on' },
            { id: 2, label: '轻烧窑2', class: 'type-on' },
            { id: 3, label: '轻烧窑3', class: 'type-on' },
            { id: 4, label: '轻烧窑4', class: 'type-on' },
            { id: 5, label: '除尘风机1', class: 'type-on' },
            { id: 6, label: '喷淋水泵1', class: 'type-on' },
            { id: 7, label: '监控单元1', class: 'type-on' }
        ],
        edges: [
            [0, 1],
            [0, 2],
            [0, 3],
            [0, 4],
            [1, 5],
            [2, 5],
            [3, 5],
            [4, 5],
            [5, 6],
            [6, 7]
        ],
        errLine: [
        ],
        errNodes: [
        ]
    }

    companyGraphs.dsq079 = { 'nodes': [{ 'id': 0, 'label': '营口南楼开发区三星耐火材料厂', 'class': 'type-on' }, { 'id': 1, 'label': '轻烧窑1', 'class': 'type-on' }, { 'id': 2, 'label': '轻烧窑2', 'class': 'type-on' }, { 'id': 3, 'label': '轻烧窑3', 'class': 'type-on' }, { 'id': 4, 'label': '除尘风机1', 'class': 'type-on' }, { 'id': 5, 'label': '喷淋水泵1', 'class': 'type-on' }], 'edges': [[1, 4], [2, 4], [3, 4], [4, 5], [0, 1], [0, 2], [0, 3]], 'errLine': [], 'errNodes': [] }

    companyGraphs.dsq080 = {
        nodes: [
            { id: 0, label: '大石桥市众安耐火材料有限责任公司', class: 'type-on' },
            { id: 1, label: '重烧竖窑1', class: 'type-on' },
            { id: 2, label: '重烧竖窑2', class: 'type-on' },
            { id: 3, label: '轻烧窑1', class: 'type-on' },
            { id: 4, label: '轻烧窑2', class: 'type-on' },
            { id: 5, label: '除尘风机1', class: 'type-on' },
            { id: 6, label: '喷淋水泵(主)', class: 'type-on' },
            { id: 7, label: '喷淋水泵(备)', class: 'type-on' },
            { id: 8, label: '监控单元1', class: 'type-on' }
        ],
        edges: [
            [0, 1],
            [0, 2],
            [0, 3],
            [0, 4],
            [1, 5],
            [2, 5],
            [3, 5],
            [4, 5],
            [5, 6],
            [5, 7],
            [6, 8],
            [7, 8]
        ],
        errLine: [
        ],
        errNodes: [
        ]
    }

    companyGraphs.dsq081 = { 'nodes': [{ 'id': 0, 'label': '营口南楼经济开发区达丰耐火材料有限公司', 'class': 'type-on' }, { 'id': 1, 'label': '重烧竖窑1', 'class': 'type-on' }, { 'id': 2, 'label': '重烧竖窑2', 'class': 'type-on' }, { 'id': 3, 'label': '重烧竖窑3', 'class': 'type-on' }, { 'id': 4, 'label': '重烧竖窑4', 'class': 'type-on' }, { 'id': 5, 'label': '除尘风机1', 'class': 'type-on' }, { 'id': 6, 'label': '喷淋水泵1', 'class': 'type-on' }, { 'id': 7, 'label': '喷淋水泵2', 'class': 'type-on' }, { 'id': 8, 'label': '除尘风机3', 'class': 'type-on' }], 'edges': [[1, 5], [2, 5], [5, 6], [3, 8], [4, 8], [8, 7], [0, 1], [0, 2], [0, 3], [0, 4]], 'errLine': [], 'errNodes': [] }

    companyGraphs.dsq082 = {
        nodes: [
            { id: 0, label: '营口明禹耐火材料厂', class: 'type-on' },
            { id: 1, label: '轻烧窑1', class: 'type-on' },
            { id: 2, label: '轻烧窑2', class: 'type-on' },
            { id: 3, label: '轻烧窑3', class: 'type-on' },
            { id: 4, label: '轻烧窑4', class: 'type-on' },
            { id: 5, label: '除尘风机1', class: 'type-on' },
            { id: 6, label: '喷淋水泵1', class: 'type-on' },
            { id: 7, label: '监控单元1', class: 'type-on' }
        ],
        edges: [
            [0, 1],
            [0, 2],
            [0, 3],
            [0, 4],
            [1, 5],
            [2, 5],
            [3, 5],
            [4, 5],
            [5, 6],
            [6, 7]
        ],
        errLine: [
        ],
        errNodes: [
        ]
    }

    companyGraphs.dsq083 = {
        nodes: [
            { id: 0, label: '大石桥市南楼经济技术开发区天马镁质材料厂', class: 'type-on' },
            { id: 1, label: '轻烧窑1', class: 'type-on' },
            { id: 2, label: '轻烧窑2', class: 'type-on' },
            { id: 3, label: '轻烧窑3', class: 'type-on' },
            { id: 4, label: '轻烧窑4', class: 'type-on' },
            { id: 5, label: '轻烧窑5', class: 'type-on' },
            { id: 6, label: '轻烧窑6', class: 'type-on' },
            { id: 7, label: '除尘风机1', class: 'type-on' },
            { id: 8, label: '除尘风机2', class: 'type-on' },
            { id: 9, label: '喷淋水泵1', class: 'type-on' },
            { id: 10, label: '喷淋水泵2', class: 'type-on' },
            { id: 11, label: '监控单元1', class: 'type-on' },
            { id: 12, label: '监控单元2', class: 'type-on' }
        ],
        edges: [
            [0, 1],
            [0, 2],
            [0, 3],
            [0, 4],
            [0, 5],
            [0, 6],
            [1, 7],
            [2, 7],
            [3, 7],
            [4, 7],
            [5, 8],
            [6, 8],
            [7, 9],
            [8, 10],
            [9, 11],
            [10, 12]
        ],
        errLine: [
        ],
        errNodes: [
        ]
    }

    companyGraphs.dsq084 = {
        nodes: [
            { id: 0, label: '营口艳芬菱镁制品厂', class: 'type-on' },
            { id: 1, label: '轻烧窑1', class: 'type-on' },
            { id: 2, label: '重烧竖窑1', class: 'type-on' },
            { id: 3, label: '除尘风机1', class: 'type-on' },
            { id: 4, label: '喷淋水泵1', class: 'type-on' },
            { id: 5, label: '监控单元1', class: 'type-on' }
        ],
        edges: [
            [0, 1],
            [0, 2],
            [1, 3],
            [2, 3],
            [3, 4],
            [4, 5]
        ],
        errLine: [
        ],
        errNodes: [
        ]
    }

    companyGraphs.dsq085 = {
        nodes: [
            { id: 0, label: '大石桥市富田耐火材料厂', class: 'type-on' },
            { id: 1, label: '轻烧窑1', class: 'type-on' },
            { id: 2, label: '轻烧窑2', class: 'type-on' },
            { id: 3, label: '轻烧窑3', class: 'type-on' },
            { id: 4, label: '轻烧窑4', class: 'type-on' },
            { id: 5, label: '轻烧窑5', class: 'type-on' },
            { id: 6, label: '除尘风机1', class: 'type-on' },
            { id: 7, label: '喷淋水泵1', class: 'type-on' },
            { id: 8, label: '监控单元1', class: 'type-on' }
        ],
        edges: [
            [0, 1],
            [0, 2],
            [0, 3],
            [0, 4],
            [0, 5],
            [1, 6],
            [2, 6],
            [3, 6],
            [4, 6],
            [5, 6],
            [6, 7],
            [7, 8]
        ],
        errLine: [
        ],
        errNodes: [
        ]
    }

    companyGraphs.dsq086 = { 'nodes': [{ 'id': 0, 'label': '大石桥市华实耐火材料有限公司', 'class': 'type-on' }, { 'id': 1, 'label': '电熔炉1', 'class': 'type-on' }, { 'id': 2, 'label': '电熔炉2', 'class': 'type-on' }, { 'id': 3, 'label': '除尘风机1', 'class': 'type-on' }, { 'id': 4, 'label': '除尘风机2', 'class': 'type-on' }], 'edges': [[0, 1], [0, 2], [1, 3], [2, 4]], 'errLine': [], 'errNodes': [] }

    companyGraphs.dsq087 = {
        nodes: [
            { id: 0, label: '大石桥市蛟龙镁粉加工厂', class: 'type-on' },
            { id: 1, label: '轻烧窑1', class: 'type-on' },
            { id: 2, label: '轻烧窑2', class: 'type-on' },
            { id: 3, label: '除尘风机1', class: 'type-on' },
            { id: 4, label: '喷淋水泵1', class: 'type-on' },
            { id: 5, label: '监控单元1', class: 'type-on' }
        ],
        edges: [
            [0, 1],
            [0, 2],
            [1, 3],
            [2, 3],
            [3, 4],
            [4, 5]
        ],
        errLine: [
        ],
        errNodes: [
        ]
    }

    companyGraphs.dsq088 = {
        nodes: [
            { id: 0, label: '营口春铖耐火材料有限公司', class: 'type-on' },
            { id: 1, label: '轻烧窑1', class: 'type-on' },
            { id: 2, label: '轻烧窑2', class: 'type-on' },
            { id: 3, label: '轻烧窑3', class: 'type-on' },
            { id: 4, label: '轻烧窑4', class: 'type-on' },
            { id: 5, label: '轻烧窑5', class: 'type-on' },
            { id: 6, label: '轻烧窑6', class: 'type-on' },
            { id: 7, label: '除尘风机1', class: 'type-on' },
            { id: 8, label: '喷淋水泵1', class: 'type-on' },
            { id: 9, label: '喷淋水泵2', class: 'type-on' },
            { id: 10, label: '监控单元1', class: 'type-on' }
        ],
        edges: [
            [0, 1],
            [0, 2],
            [0, 3],
            [0, 4],
            [0, 5],
            [0, 6],
            [1, 7],
            [2, 7],
            [3, 7],
            [4, 7],
            [5, 7],
            [6, 7],
            [7, 8],
            [7, 9],
            [8, 10],
            [9, 10]
        ],
        errLine: [
        ],
        errNodes: [
        ]
    }

    companyGraphs.dsq089 = {
        nodes: [
            { id: 0, label: '营口万润耐火材料有限公司', class: 'type-on' },
            { id: 1, label: '电熔炉1', class: 'type-on' },
            { id: 2, label: '电熔炉2', class: 'type-on' },
            { id: 3, label: '电熔炉3', class: 'type-on' },
            { id: 4, label: '电熔炉4', class: 'type-on' },
            { id: 5, label: '电熔炉5(备用)', class: 'type-on' },
            { id: 6, label: '除尘风机1', class: 'type-on' },
            { id: 7, label: '除尘风机2', class: 'type-on' },
            { id: 8, label: '监控单元1', class: 'type-on' }
        ],
        edges: [
            [0, 1],
            [0, 2],
            [0, 3],
            [0, 4],
            [0, 5],
            [1, 6],
            [2, 6],
            [3, 6],
            [4, 6],
            [5, 6],
            [1, 7],
            [2, 7],
            [3, 7],
            [4, 7],
            [5, 7],
            [6, 8],
            [7, 8]
        ],
        errLine: [
        ],
        errNodes: [
        ]
    }

    companyGraphs.dsq090 = {
        nodes: [
            { id: 0, label: '营口富迪耐火材料有限公司', class: 'type-on' },
            { id: 1, label: '轻烧窑1', class: 'type-on' },
            { id: 2, label: '轻烧窑2', class: 'type-on' },
            { id: 3, label: '轻烧窑3', class: 'type-on' },
            { id: 4, label: '轻烧窑4', class: 'type-on' },
            { id: 5, label: '轻烧窑5', class: 'type-on' },
            { id: 6, label: '轻烧窑6', class: 'type-on' },
            { id: 7, label: '轻烧窑7', class: 'type-on' },
            { id: 8, label: '除尘风机1', class: 'type-on' },
            { id: 9, label: '除尘风机2', class: 'type-on' },
            { id: 10, label: '除尘风机3', class: 'type-on' },
            { id: 11, label: '喷淋水泵1', class: 'type-on' },
            { id: 12, label: '喷淋水泵2', class: 'type-on' },
            { id: 13, label: '喷淋水泵3', class: 'type-on' },
            { id: 14, label: '监控单元1', class: 'type-on' },
            { id: 15, label: '监控单元2', class: 'type-on' },
            { id: 16, label: '监控单元3', class: 'type-on' }
        ],
        edges: [
            [0, 1],
            [0, 2],
            [0, 3],
            [0, 4],
            [0, 5],
            [0, 6],
            [0, 7],
            [1, 8],
            [2, 8],
            [3, 9],
            [4, 9],
            [5, 9],
            [6, 10],
            [7, 10],
            [8, 11],
            [9, 12],
            [10, 13],
            [11, 14],
            [12, 15],
            [13, 16]
        ],
        errLine: [
        ],
        errNodes: [
        ]
    }

    companyGraphs.dsq091 = {
        nodes: [
            { id: 0, label: '大石桥临峰耐火材料有限公司', class: 'type-on' },
            { id: 1, label: '轻烧窑1', class: 'type-on' },
            { id: 2, label: '轻烧窑2', class: 'type-on' },
            { id: 3, label: '轻烧窑3', class: 'type-on' },
            { id: 4, label: '轻烧窑4', class: 'type-on' },
            { id: 5, label: '轻烧窑5', class: 'type-on' },
            { id: 6, label: '重烧竖窑1', class: 'type-on' },
            { id: 7, label: '重烧竖窑2', class: 'type-on' },
            { id: 8, label: '重烧竖窑3', class: 'type-on' },
            { id: 9, label: '重烧竖窑4', class: 'type-on' },
            { id: 10, label: '重烧竖窑5', class: 'type-on' },
            { id: 11, label: '重烧竖窑6', class: 'type-on' },
            { id: 12, label: '重烧竖窑7', class: 'type-on' },
            { id: 13, label: '重烧竖窑8', class: 'type-on' },
            { id: 14, label: '重烧竖窑9', class: 'type-on' },
            { id: 15, label: '重烧竖窑10', class: 'type-on' },
            { id: 16, label: '重烧竖窑11', class: 'type-on' },
            { id: 17, label: '重烧竖窑12', class: 'type-on' },
            { id: 18, label: '除尘风机1', class: 'type-on' },
            { id: 19, label: '除尘风机2', class: 'type-on' },
            { id: 20, label: '除尘风机3', class: 'type-on' },
            { id: 21, label: '喷淋水泵1', class: 'type-on' },
            { id: 22, label: '喷淋水泵2', class: 'type-on' },
            { id: 23, label: '监控单元1', class: 'type-on' },
            { id: 24, label: '监控单元2', class: 'type-on' }
        ],
        edges: [
            [0, 1],
            [0, 2],
            [0, 3],
            [0, 4],
            [0, 5],
            [0, 6],
            [0, 7],
            [0, 8],
            [0, 9],
            [0, 10],
            [0, 11],
            [0, 12],
            [0, 13],
            [0, 14],
            [0, 15],
            [0, 16],
            [0, 17],
            [1, 18],
            [2, 18],
            [3, 18],
            [4, 18],
            [5, 20],
            [6, 18],
            [7, 18],
            [8, 18],
            [9, 18],
            [10, 18],
            [11, 18],
            [12, 19],
            [13, 19],
            [14, 19],
            [15, 19],
            [16, 19],
            [17, 19],
            [19, 21],
            [20, 22],
            [18, 23],
            [21, 24],
            [22, 24]
        ],
        errLine: [
        ],
        errNodes: [
        ]
    }

    companyGraphs.dsq092 = { 'nodes': [{ 'id': 0, 'label': '大石桥市华镁集团有限公司', 'class': 'type-on' }, { 'id': 1, 'label': '重烧竖窑1', 'class': 'type-on' }, { 'id': 2, 'label': '重烧竖窑2', 'class': 'type-on' }, { 'id': 3, 'label': '重烧竖窑3', 'class': 'type-on' }, { 'id': 4, 'label': '除尘风机', 'class': 'type-on' }, { 'id': 5, 'label': '脱硫水泵', 'class': 'type-on' }, { 'id': 6, 'label': '静电除尘1', 'class': 'type-on' }, { 'id': 7, 'label': '静电除尘2', 'class': 'type-on' }], 'edges': [[1, 4], [2, 4], [3, 4], [4, 5], [5, 6], [5, 7], [0, 1], [0, 2], [0, 3]], 'errLine': [], 'errNodes': [] }

    companyGraphs.dsq093 = {
        nodes: [
            { id: 0, label: '大石桥市冠中镁制品厂', class: 'type-on' },
            { id: 1, label: '轻烧窑1', class: 'type-on' },
            { id: 2, label: '轻烧窑2', class: 'type-on' },
            { id: 3, label: '轻烧窑3', class: 'type-on' },
            { id: 4, label: '轻烧窑4', class: 'type-on' },
            { id: 5, label: '除尘风机1', class: 'type-on' },
            { id: 6, label: '喷淋水泵1', class: 'type-on' },
            { id: 7, label: '喷淋水泵2', class: 'type-on' },
            { id: 8, label: '监控单元1', class: 'type-on' }
        ],
        edges: [
            [0, 1],
            [0, 2],
            [0, 3],
            [0, 4],
            [1, 5],
            [2, 5],
            [3, 5],
            [4, 5],
            [5, 6],
            [5, 7],
            [6, 8],
            [7, 8]
        ],
        errLine: [
        ],
        errNodes: [
        ]
    }

    companyGraphs.dsq094 = {
        nodes: [
            { id: 0, label: '大石桥市鑫磊特耐有限公司', class: 'type-on' },
            { id: 1, label: '隧道窑1', class: 'type-on' },
            { id: 2, label: '除尘风机', class: 'type-on' },
            { id: 3, label: '监控单元1', class: 'type-on' }
        ],
        edges: [
            [0, 1],
            [1, 2],
            [2, 3]
        ],
        errLine: [
        ],
        errNodes: [
        ]
    }

    companyGraphs.dsq095 = { 'nodes': [{ 'id': 0, 'label': '营口南楼恒运耐火材料厂', 'class': 'type-on' }, { 'id': 1, 'label': '轻烧窑1', 'class': 'type-on' }, { 'id': 2, 'label': '轻烧窑2', 'class': 'type-on' }, { 'id': 3, 'label': '轻烧窑3', 'class': 'type-on' }, { 'id': 4, 'label': '轻烧窑4', 'class': 'type-on' }, { 'id': 5, 'label': '除尘风机1', 'class': 'type-on' }, { 'id': 6, 'label': '除尘风机2', 'class': 'type-on' }, { 'id': 7, 'label': '脱硫水泵(备)', 'class': 'type-on' }, { 'id': 8, 'label': '脱硝水泵(备)', 'class': 'type-on' }, { 'id': 9, 'label': '脱硝水泵(主)', 'class': 'type-on' }, { 'id': 11, 'label': '喷淋水泵3', 'class': 'type-on' }, { 'id': 12, 'label': '喷淋水泵4', 'class': 'type-on' }, { 'id': 13, 'label': '脱硫水泵(主)', 'class': 'type-on' }], 'edges': [[1, 5], [2, 5], [1, 6], [3, 5], [3, 6], [5, 13], [5, 7], [5, 9], [5, 8], [5, 12], [5, 11], [2, 6], [4, 5], [4, 6], [0, 1], [0, 2], [0, 3], [0, 4]], 'errLine': [], 'errNodes': [] }

    companyGraphs.dsq096 = { 'nodes': [{ 'id': 0, 'label': '大石桥市金和耐火材料厂', 'class': 'type-on' }, { 'id': 1, 'label': '电熔镁1', 'class': 'type-on' }, { 'id': 2, 'label': '电熔镁2', 'class': 'type-on' }, { 'id': 3, 'label': '电熔镁3', 'class': 'type-on' }, { 'id': 4, 'label': '电熔镁4', 'class': 'type-on' }, { 'id': 5, 'label': '电熔镁5', 'class': 'type-on' }, { 'id': 6, 'label': '电熔镁6', 'class': 'type-on' }, { 'id': 7, 'label': '电熔镁7', 'class': 'type-on' }, { 'id': 8, 'label': '电熔镁8', 'class': 'type-on' }, { 'id': 9, 'label': '除尘风机2', 'class': 'type-on' }, { 'id': 10, 'label': '除尘风机1', 'class': 'type-on' }, { 'id': 11, 'label': '除尘风机3', 'class': 'type-on' }, { 'id': 12, 'label': '除尘风机4', 'class': 'type-on' }], 'edges': [[1, 10], [2, 10], [3, 9], [4, 9], [5, 11], [6, 11], [7, 12], [8, 12], [0, 1], [0, 2], [0, 3], [0, 4], [0, 5], [0, 6], [0, 7], [0, 8]], 'errLine': [], 'errNodes': [] }

    companyGraphs.dsq097 = { 'nodes': [{ 'id': 0, 'label': '营口南楼经济开发区高庄荣华石粉厂', 'class': 'type-on' }, { 'id': 1, 'label': '轻烧窑1', 'class': 'type-on' }, { 'id': 2, 'label': '轻烧窑2', 'class': 'type-on' }, { 'id': 3, 'label': '轻烧窑3', 'class': 'type-on' }, { 'id': 4, 'label': '轻烧窑4', 'class': 'type-on' }, { 'id': 5, 'label': '除尘风机', 'class': 'type-on' }, { 'id': 6, 'label': '脱硫水泵', 'class': 'type-on' }], 'edges': [[1, 5], [2, 5], [3, 5], [4, 5], [5, 6]], 'errLine': [], 'errNodes': [] }

    companyGraphs.dsq098 = { 'nodes': [{ 'id': 0, 'label': '营口南楼鑫新耐火材料有限公司', 'class': 'type-on' }, { 'id': 1, 'label': '轻烧窑1', 'class': 'type-on' }, { 'id': 2, 'label': '轻烧窑2', 'class': 'type-on' }, { 'id': 3, 'label': '除尘风机1', 'class': 'type-on' }, { 'id': 4, 'label': '喷淋水泵1', 'class': 'type-on' }, { 'id': 5, 'label': '喷淋水泵2', 'class': 'type-on' }], 'edges': [[1, 3], [2, 3], [3, 4], [3, 5], [0, 1], [0, 2]], 'errLine': [], 'errNodes': [] }

    companyGraphs.dsq099 = {
        nodes: [
            { id: 0, label: '营口南楼鑫新耐火材料有限公司', class: 'type-on' },
            { id: 1, label: '轻烧窑1', class: 'type-on' },
            { id: 2, label: '轻烧窑2', class: 'type-on' },
            { id: 3, label: '轻烧窑3', class: 'type-on' },
            { id: 4, label: '轻烧窑4', class: 'type-on' },
            { id: 5, label: '除尘风机1', class: 'type-on' },
            { id: 6, label: '喷淋水泵1', class: 'type-on' },
            { id: 7, label: '喷淋水泵2', class: 'type-on' },
            { id: 8, label: '监控单元1', class: 'type-on' }
        ],
        edges: [
            [0, 1],
            [0, 2],
            [0, 3],
            [0, 4],
            [1, 5],
            [2, 5],
            [5, 6],
            [5, 7],
            [6, 8],
            [7, 8]
        ],
        errLine: [
        ],
        errNodes: [
        ]
    }

    companyGraphs.dsq100 = {
        nodes: [
            { id: 0, label: '大石桥市石佛镁制品有限责任公司', class: 'type-on' },
            { id: 1, label: '电熔炉1', class: 'type-on' },
            { id: 2, label: '电熔炉2', class: 'type-on' },
            { id: 3, label: '电熔炉3', class: 'type-on' },
            { id: 4, label: '电熔炉4', class: 'type-on' },
            { id: 5, label: '电熔炉5', class: 'type-on' },
            { id: 6, label: '电熔炉6', class: 'type-on' },
            { id: 7, label: '电熔炉7', class: 'type-on' },
            { id: 8, label: '电熔炉8', class: 'type-on' },
            { id: 9, label: '除尘风机1', class: 'type-on' },
            { id: 10, label: '除尘风机2', class: 'type-on' },
            { id: 11, label: '除尘风机3', class: 'type-on' },
            { id: 12, label: '除尘风机4', class: 'type-on' },
            { id: 13, label: '除尘风机5', class: 'type-on' },
            { id: 14, label: '除尘风机6', class: 'type-on' },
            { id: 15, label: '除尘风机7', class: 'type-on' },
            { id: 16, label: '除尘风机8', class: 'type-on' },
            { id: 17, label: '监控单元1', class: 'type-on' },
            { id: 18, label: '监控单元2', class: 'type-on' }
        ],
        edges: [
            [0, 1],
            [0, 2],
            [0, 3],
            [0, 4],
            [0, 5],
            [0, 6],
            [0, 7],
            [0, 8],
            [1, 9],
            [2, 10],
            [3, 11],
            [4, 12],
            [5, 13],
            [6, 14],
            [7, 15],
            [8, 16],
            [9, 17],
            [10, 17],
            [11, 18],
            [12, 18],
            [13, 18],
            [14, 18],
            [15, 18],
            [16, 18]
        ],
        errLine: [
        ],
        errNodes: [
        ]
    }

    companyGraphs.dsq101 = {
        nodes: [
            { id: 0, label: '营口南地耐火材料有限公司', class: 'type-on' },
            { id: 1, label: '重烧竖窑1', class: 'type-on' },
            { id: 2, label: '重烧竖窑2', class: 'type-on' },
            { id: 3, label: '轻烧窑1', class: 'type-on' },
            { id: 4, label: '轻烧窑2', class: 'type-on' },
            { id: 5, label: '除尘风机1', class: 'type-on' },
            { id: 6, label: '除尘风机2', class: 'type-on' },
            { id: 7, label: '除尘风机3', class: 'type-on' },
            { id: 8, label: '除尘风机4', class: 'type-on' },
            { id: 9, label: '脱硫水泵1', class: 'type-on' },
            { id: 10, label: '脱硫水泵2', class: 'type-on' },
            { id: 11, label: '脱硝水泵1', class: 'type-on' },
            { id: 12, label: '脱硝水泵2', class: 'type-on' },
            { id: 13, label: '喷淋水泵1', class: 'type-on' },
            { id: 14, label: '喷淋水泵2', class: 'type-on' },
            { id: 15, label: '监控单元1', class: 'type-on' },
            { id: 16, label: '监控单元2', class: 'type-on' }
        ],
        edges: [
            [0, 1],
            [0, 2],
            [0, 3],
            [0, 4],
            [1, 5],
            [2, 5],
            [1, 6],
            [2, 6],
            [3, 7],
            [4, 7],
            [3, 8],
            [4, 8],
            [5, 9],
            [6, 9],
            [5, 10],
            [6, 10],
            [7, 13],
            [8, 13],
            [7, 14],
            [8, 14],
            [9, 11],
            [10, 11],
            [9, 12],
            [10, 12],
            [11, 15],
            [12, 15],
            [13, 16],
            [14, 16]
        ],
        errLine: [
        ],
        errNodes: [
        ]
    }

    companyGraphs.dsq102 = {
        nodes: [
            { id: 0, label: '营口新宇荣耐火材料有限公司', class: 'type-on' },
            { id: 1, label: '轻烧窑1', class: 'type-on' },
            { id: 2, label: '轻烧窑2', class: 'type-on' },
            { id: 3, label: '轻烧窑3', class: 'type-on' },
            { id: 4, label: '除尘风机1', class: 'type-on' },
            { id: 5, label: '喷淋水泵1(脱硫)', class: 'type-on' },
            { id: 6, label: '喷淋水泵2(脱硝)', class: 'type-on' },
            { id: 7, label: '喷淋水泵3(脱硫)', class: 'type-on' },
            { id: 8, label: '喷淋水泵4(脱硝)', class: 'type-on' },
            { id: 9, label: '监控单元1', class: 'type-on' }
        ],
        edges: [
            [0, 1],
            [0, 2],
            [0, 3],
            [1, 4],
            [2, 4],
            [3, 4],
            [4, 5],
            [4, 7],
            [5, 6],
            [5, 8],
            [7, 6],
            [7, 8],
            [6, 9],
            [8, 9]
        ],
        errLine: [
        ],
        errNodes: [
        ]
    }

    companyGraphs.dsq103 = {
        nodes: [
            { id: 0, label: '大石桥市振山耐火材料有限公司', class: 'type-on' },
            { id: 1, label: '电熔炉1', class: 'type-on' },
            { id: 2, label: '电熔炉2', class: 'type-on' },
            { id: 3, label: '除尘风机1', class: 'type-on' },
            { id: 4, label: '监控单元1', class: 'type-on' }
        ],
        edges: [
            [0, 1],
            [0, 2],
            [1, 3],
            [2, 3],
            [3, 4]
        ],
        errLine: [
        ],
        errNodes: [
        ]
    }

    companyGraphs.dsq104 = { 'nodes': [{ 'id': 1, 'label': '营口关山耐火材料有限公司', 'class': 'type-on' }, { 'id': 2, 'label': '轻烧窑2', 'class': 'type-on' }, { 'id': 3, 'label': '轻烧窑3', 'class': 'type-on' }, { 'id': 4, 'label': '轻烧窑4', 'class': 'type-on' }, { 'id': 5, 'label': '轻烧窑6', 'class': 'type-on' }, { 'id': 6, 'label': '轻烧窑1', 'class': 'type-on' }, { 'id': 7, 'label': '除尘风机6', 'class': 'type-on' }, { 'id': 8, 'label': '除尘风机7', 'class': 'type-on' }, { 'id': 9, 'label': '除尘风机8', 'class': 'type-on' }, { 'id': 10, 'label': '轻烧窑5', 'class': 'type-on' }, { 'id': 11, 'label': '电熔炉3', 'class': 'type-on' }, { 'id': 12, 'label': '电熔炉4', 'class': 'type-on' }, { 'id': 13, 'label': '电熔炉9', 'class': 'type-on' }, { 'id': 14, 'label': '电熔炉8', 'class': 'type-on' }, { 'id': 15, 'label': '电熔炉7', 'class': 'type-on' }, { 'id': 16, 'label': '电熔炉6', 'class': 'type-on' }, { 'id': 17, 'label': '电熔炉5', 'class': 'type-on' }, { 'id': 21, 'label': '重烧竖窑1', 'class': 'type-on' }, { 'id': 22, 'label': '重烧竖窑2', 'class': 'type-on' }, { 'id': 23, 'label': '喷淋水泵1', 'class': 'type-on' }, { 'id': 24, 'label': '喷淋水泵2', 'class': 'type-on' }, { 'id': 25, 'label': '喷淋水泵3', 'class': 'type-on' }, { 'id': 26, 'label': '重烧竖窑3', 'class': 'type-on' }, { 'id': 27, 'label': '重烧竖窑4', 'class': 'type-on' }, { 'id': 28, 'label': '喷淋水泵4', 'class': 'type-on' }, { 'id': 29, 'label': '喷淋水泵5', 'class': 'type-on' }, { 'id': 30, 'label': '除尘风机2', 'class': 'type-on' }, { 'id': 31, 'label': '电熔炉1', 'class': 'type-on' }, { 'id': 32, 'label': '电熔炉2', 'class': 'type-on' }], 'edges': [[6, 7], [2, 8], [3, 9], [6, 8], [6, 9], [2, 7], [2, 9], [3, 7], [3, 8], [4, 7], [4, 8], [4, 9], [10, 7], [10, 8], [10, 9], [5, 7], [5, 8], [5, 9], [21, 7], [21, 8], [21, 9], [22, 7], [22, 8], [22, 9], [26, 8], [27, 9], [26, 9], [27, 8], [7, 23], [7, 24], [7, 25], [8, 23], [8, 24], [8, 25], [9, 23], [9, 24], [9, 25], [8, 28], [8, 29], [9, 28], [9, 29], [11, 30], [11, 7], [11, 8], [11, 9], [11, 23], [11, 24], [11, 25], [11, 28], [11, 29], [12, 30], [12, 7], [12, 8], [12, 23], [12, 24], [12, 25], [12, 28], [12, 29], [17, 30], [17, 7], [17, 8], [17, 9], [17, 23], [17, 24], [17, 25], [17, 28], [17, 29], [16, 30], [16, 7], [16, 8], [16, 9], [16, 23], [16, 24], [16, 25], [16, 28], [16, 29], [15, 30], [15, 7], [15, 8], [15, 9], [15, 23], [15, 24], [15, 25], [15, 28], [15, 29], [14, 30], [14, 7], [14, 8], [14, 9], [14, 23], [14, 24], [14, 25], [14, 28], [14, 29], [13, 30], [13, 7], [13, 8], [13, 9], [13, 23], [13, 24], [13, 25], [13, 28], [13, 29], [31, 7], [31, 8], [31, 9], [32, 7], [32, 8], [32, 9]], 'errLine': [], 'errNodes': [] }

    companyGraphs.dsq105 = {
        nodes: [
            { id: 0, label: '营口久弘耐火材料有限公司', class: 'type-on' },
            { id: 1, label: '轻烧窑1', class: 'type-on' },
            { id: 2, label: '轻烧窑2', class: 'type-on' },
            { id: 3, label: '轻烧窑3', class: 'type-on' },
            { id: 4, label: '轻烧窑4', class: 'type-on' },
            { id: 5, label: '除尘风机1', class: 'type-on' },
            { id: 6, label: '除尘风机2', class: 'type-on' },
            { id: 7, label: '喷淋水泵1', class: 'type-on' },
            { id: 8, label: '喷淋水泵2', class: 'type-on' },
            { id: 9, label: '监控单元1', class: 'type-on' },
            { id: 10, label: '监控单元2', class: 'type-on' }
        ],
        edges: [
            [0, 1],
            [0, 2],
            [0, 3],
            [0, 4],
            [1, 5],
            [2, 5],
            [3, 6],
            [4, 6],
            [5, 7],
            [6, 8],
            [7, 9],
            [8, 10]
        ],
        errLine: [
        ],
        errNodes: [
        ]
    }

    companyGraphs.dsq106 = {
        nodes: [
            { id: 0, label: '大石桥市和平耐火有限公司', class: 'type-on' },
            { id: 1, label: '电熔炉1', class: 'type-on' },
            { id: 2, label: '电熔炉2', class: 'type-on' },
            { id: 3, label: '电熔炉3', class: 'type-on' },
            { id: 4, label: '电熔炉4', class: 'type-on' },
            { id: 5, label: '除尘风机1', class: 'type-on' },
            { id: 6, label: '除尘风机2', class: 'type-on' },
            { id: 7, label: '除尘风机3', class: 'type-on' },
            { id: 8, label: '除尘风机4', class: 'type-on' },
            { id: 9, label: '监控单元1', class: 'type-on' },
            { id: 10, label: '监控单元2', class: 'type-on' }
        ],
        edges: [
            [0, 1],
            [0, 2],
            [0, 3],
            [0, 4],
            [1, 5],
            [2, 6],
            [3, 7],
            [4, 8],
            [5, 9],
            [6, 9],
            [7, 10],
            [8, 10]
        ],
        errLine: [
        ],
        errNodes: [
        ]
    }

    companyGraphs.dsq107 = {
        nodes: [
            { id: 0, label: '大石桥市天禹矿业有限公司', class: 'type-on' },
            { id: 1, label: '电熔炉1', class: 'type-on' },
            { id: 2, label: '电熔炉2', class: 'type-on' },
            { id: 3, label: '除尘风机1', class: 'type-on' },
            { id: 4, label: '监控单元1', class: 'type-on' }
        ],
        edges: [
            [0, 1],
            [0, 2],
            [1, 3],
            [2, 3],
            [3, 4]
        ],
        errLine: [
        ],
        errNodes: [
        ]
    }

    companyGraphs.dsq108 = {
        nodes: [
            { id: 0, label: '大石桥市兴刚耐火材料有限公司', class: 'type-on' },
            { id: 1, label: '重烧竖窑1', class: 'type-on' },
            { id: 2, label: '重烧竖窑2', class: 'type-on' },
            { id: 3, label: '重烧竖窑3', class: 'type-on' },
            { id: 4, label: '重烧竖窑4', class: 'type-on' },
            { id: 5, label: '重烧竖窑5', class: 'type-on' },
            { id: 6, label: '重烧竖窑6', class: 'type-on' },
            { id: 7, label: '重烧竖窑7', class: 'type-on' },
            { id: 8, label: '重烧竖窑8', class: 'type-on' },
            { id: 9, label: '重烧竖窑9', class: 'type-on' },
            { id: 10, label: '重烧竖窑10', class: 'type-on' },
            { id: 11, label: '除尘风机1', class: 'type-on' },
            { id: 12, label: '除尘风机2', class: 'type-on' },
            { id: 13, label: '除尘风机3', class: 'type-on' },
            { id: 14, label: '喷淋水泵1', class: 'type-on' },
            { id: 15, label: '喷淋水泵2', class: 'type-on' },
            { id: 16, label: '喷淋水泵3', class: 'type-on' },
            { id: 17, label: '喷淋水泵4', class: 'type-on' },
            { id: 18, label: '喷淋水泵5', class: 'type-on' },
            { id: 19, label: '喷淋水泵6', class: 'type-on' },
            { id: 20, label: '喷淋水泵7', class: 'type-on' },
            { id: 21, label: '监控单元1', class: 'type-on' },
            { id: 22, label: '监控单元2', class: 'type-on' },
            { id: 23, label: '监控单元3', class: 'type-on' }
        ],
        edges: [
            [0, 1],
            [0, 2],
            [0, 3],
            [0, 4],
            [0, 5],
            [0, 6],
            [0, 7],
            [0, 8],
            [0, 9],
            [0, 10],
            [1, 11],
            [2, 11],
            [3, 11],
            [4, 11],
            [5, 12],
            [6, 12],
            [7, 13],
            [8, 13],
            [9, 13],
            [10, 13],
            [11, 14],
            [11, 15],
            [11, 16],
            [12, 17],
            [13, 18],
            [13, 19],
            [13, 20],
            [14, 21],
            [15, 21],
            [16, 21],
            [17, 22],
            [18, 23],
            [19, 23],
            [20, 23]
        ],
        errLine: [
        ],
        errNodes: [
        ]
    }

    companyGraphs.dsq109 = {
        nodes: [
            { id: 0, label: '营口福扬耐火材料有限公司', class: 'type-on' },
            { id: 1, label: '轻烧窑1', class: 'type-on' },
            { id: 2, label: '轻烧窑2', class: 'type-on' },
            { id: 3, label: '除尘风机1', class: 'type-on' },
            { id: 4, label: '喷淋水泵1', class: 'type-on' },
            { id: 5, label: '监控单元1', class: 'type-on' }
        ],
        edges: [
            [0, 1],
            [0, 2],
            [1, 3],
            [2, 3],
            [3, 4],
            [4, 5]
        ],
        errLine: [
        ],
        errNodes: [
        ]
    }

    companyGraphs.dsq110 = {
        nodes: [
            { id: 0, label: '南楼经济开发区高庄威鼎菱镁厂', class: 'type-on' },
            { id: 1, label: '轻烧窑1', class: 'type-on' },
            { id: 2, label: '轻烧窑2', class: 'type-on' },
            { id: 3, label: '除尘风机1', class: 'type-on' },
            { id: 4, label: '喷淋水泵1', class: 'type-on' },
            { id: 5, label: '喷淋水泵2', class: 'type-on' },
            { id: 6, label: '监控单元1', class: 'type-on' }
        ],
        edges: [
            [0, 1],
            [0, 2],
            [1, 3],
            [2, 3],
            [3, 4],
            [3, 5],
            [4, 6],
            [5, 6]
        ],
        errLine: [
        ],
        errNodes: [
        ]
    }

    companyGraphs.dsq111 = { 'nodes': [{ 'id': 0, 'label': '营口南楼镁灵耐火材料有限公司', 'class': 'type-on' }, { 'id': 1, 'label': '重烧竖窑1', 'class': 'type-on' }, { 'id': 2, 'label': '重烧竖窑2', 'class': 'type-on' }, { 'id': 3, 'label': '除尘风机1', 'class': 'type-on' }, { 'id': 4, 'label': '脱硫水泵1', 'class': 'type-on' }, { 'id': 5, 'label': '脱硫水泵2', 'class': 'type-on' }, { 'id': 6, 'label': '脱硫水泵3', 'class': 'type-on' }, { 'id': 7, 'label': '轻烧窑1', 'class': 'type-on' }, { 'id': 8, 'label': '轻烧窑2', 'class': 'type-on' }, { 'id': 9, 'label': '轻烧窑3', 'class': 'type-on' }, { 'id': 10, 'label': '轻烧窑4', 'class': 'type-on' }, { 'id': 11, 'label': '除尘风机1', 'class': 'type-on' }, { 'id': 12, 'label': '脱硫水泵1', 'class': 'type-on' }, { 'id': 13, 'label': '脱硫水泵3', 'class': 'type-on' }, { 'id': 14, 'label': '脱硫水泵2', 'class': 'type-on' }], 'edges': [[1, 3], [2, 3], [3, 4], [3, 5], [3, 6], [7, 11], [8, 11], [9, 11], [10, 11], [11, 12], [11, 14], [11, 13]], 'errLine': [], 'errNodes': [] }

    companyGraphs.dsq112 = { 'nodes': [{ 'id': 0, 'label': '营口鑫伟耐火材料有限公司', 'class': 'type-on' }, { 'id': 1, 'label': '轻烧窑1', 'class': 'type-on' }, { 'id': 2, 'label': '轻烧窑2', 'class': 'type-on' }, { 'id': 3, 'label': '轻烧窑3', 'class': 'type-on' }, { 'id': 4, 'label': '轻烧窑4', 'class': 'type-on' }, { 'id': 5, 'label': '轻烧窑5', 'class': 'type-on' }, { 'id': 6, 'label': '除尘风机1', 'class': 'type-on' }, { 'id': 7, 'label': '喷淋水泵1', 'class': 'type-on' }, { 'id': 8, 'label': '喷淋水泵2', 'class': 'type-on' }, { 'id': 9, 'label': '喷淋水泵3', 'class': 'type-on' }, { 'id': 10, 'label': '除尘风机2', 'class': 'type-on' }, { 'id': 11, 'label': '喷淋水泵5', 'class': 'type-on' }, { 'id': 12, 'label': '喷淋水泵6', 'class': 'type-on' }, { 'id': 13, 'label': '喷淋水泵4', 'class': 'type-on' }], 'edges': [[1, 6], [2, 6], [3, 6], [6, 7], [6, 8], [6, 9], [4, 10], [5, 10], [10, 13], [10, 11], [10, 12]], 'errLine': [], 'errNodes': [] }

    companyGraphs.dsq113 = {
        nodes: [
            { id: 0, label: '营口南楼经济开发区广宇镁质材料厂', class: 'type-on' },
            { id: 1, label: '轻烧窑1', class: 'type-on' },
            { id: 2, label: '轻烧窑2', class: 'type-on' },
            { id: 3, label: '除尘风机1', class: 'type-on' },
            { id: 4, label: '喷淋水泵1', class: 'type-on' },
            { id: 5, label: '喷淋水泵2', class: 'type-on' },
            { id: 6, label: '监控单元1', class: 'type-on' }
        ],
        edges: [
            [0, 1],
            [0, 2],
            [1, 3],
            [2, 3],
            [3, 4],
            [3, 5],
            [4, 6],
            [5, 6]
        ],
        errLine: [
        ],
        errNodes: [
        ]
    }

    companyGraphs.dsq114 = {
        nodes: [
            { id: 0, label: '营口群力合成耐火材料有限公司', class: 'type-on' },
            { id: 1, label: '电熔炉1', class: 'type-on' },
            { id: 2, label: '电熔炉2', class: 'type-on' },
            { id: 3, label: '电熔炉3', class: 'type-on' },
            { id: 4, label: '电熔炉4', class: 'type-on' },
            { id: 5, label: '电熔炉5', class: 'type-on' },
            { id: 6, label: '电熔炉6', class: 'type-on' },
            { id: 7, label: '电熔炉7', class: 'type-on' },
            { id: 8, label: '电熔炉8', class: 'type-on' },
            { id: 9, label: '电熔炉9', class: 'type-on' },
            { id: 10, label: '电熔炉10', class: 'type-on' },
            { id: 11, label: '电熔炉11', class: 'type-on' },
            { id: 12, label: '电熔炉12', class: 'type-on' },
            { id: 13, label: '电熔炉13', class: 'type-on' },
            { id: 14, label: '电熔炉14', class: 'type-on' },
            { id: 15, label: '电熔炉15', class: 'type-on' },
            { id: 16, label: '电熔炉16', class: 'type-on' },
            { id: 17, label: '电熔炉17', class: 'type-on' },
            { id: 18, label: '电熔炉18', class: 'type-on' },
            { id: 19, label: '电熔炉19', class: 'type-on' },
            { id: 20, label: '电熔炉20', class: 'type-on' },
            { id: 21, label: '电熔炉21', class: 'type-on' },
            { id: 22, label: '除尘风机1', class: 'type-on' },
            { id: 23, label: '除尘风机2', class: 'type-on' },
            { id: 24, label: '除尘风机3', class: 'type-on' },
            { id: 25, label: '除尘风机4', class: 'type-on' },
            { id: 26, label: '除尘风机5', class: 'type-on' },
            { id: 27, label: '除尘风机6', class: 'type-on' },
            { id: 28, label: '除尘风机7', class: 'type-on' },
            { id: 29, label: '监控单元1', class: 'type-on' },
            { id: 30, label: '监控单元2', class: 'type-on' },
            { id: 31, label: '监控单元3', class: 'type-on' },
            { id: 32, label: '监控单元4', class: 'type-on' },
            { id: 33, label: '监控单元5', class: 'type-on' }
        ],
        edges: [
            [0, 1],
            [0, 2],
            [0, 3],
            [0, 4],
            [0, 5],
            [0, 6],
            [0, 7],
            [0, 8],
            [0, 9],
            [0, 10],
            [0, 11],
            [0, 12],
            [0, 13],
            [0, 14],
            [0, 15],
            [0, 16],
            [0, 17],
            [0, 18],
            [0, 19],
            [0, 20],
            [0, 21],
            [1, 24],
            [2, 24],
            [3, 24],
            [4, 25],
            [5, 25],
            [6, 25],
            [7, 23],
            [8, 23],
            [9, 23],
            [10, 22],
            [11, 22],
            [12, 22],
            [13, 26],
            [14, 26],
            [15, 26],
            [16, 27],
            [17, 27],
            [18, 27],
            [19, 28],
            [20, 28],
            [21, 28],
            [22, 29],
            [23, 30],
            [24, 31],
            [25, 31],
            [26, 32],
            [27, 32],
            [28, 33]
        ],
        errLine: [
        ],
        errNodes: [
        ]
    }

    companyGraphs.dsq115 = {
        nodes: [
            { id: 0, label: '大石桥市永丰耐火材料厂', class: 'type-on' },
            { id: 1, label: '轻烧窑1', class: 'type-on' },
            { id: 2, label: '轻烧窑2', class: 'type-on' },
            { id: 3, label: '轻烧窑3', class: 'type-on' },
            { id: 4, label: '轻烧窑4', class: 'type-on' },
            { id: 5, label: '轻烧窑5', class: 'type-on' },
            { id: 6, label: '轻烧窑6', class: 'type-on' },
            { id: 7, label: '轻烧窑7', class: 'type-on' },
            { id: 8, label: '轻烧窑8', class: 'type-on' },
            { id: 9, label: '除尘风机1', class: 'type-on' },
            { id: 10, label: '喷淋水泵1', class: 'type-on' },
            { id: 11, label: '喷淋水泵2', class: 'type-on' },
            { id: 12, label: '监控单元1', class: 'type-on' }
        ],
        edges: [
            [0, 1],
            [0, 2],
            [0, 3],
            [0, 4],
            [0, 5],
            [0, 6],
            [0, 7],
            [0, 8],
            [1, 9],
            [2, 9],
            [3, 9],
            [4, 9],
            [5, 9],
            [6, 9],
            [7, 9],
            [8, 9],
            [9, 10],
            [9, 11],
            [10, 12],
            [11, 12]
        ],
        errLine: [
        ],
        errNodes: [
        ]
    }

    companyGraphs.dsq116 = { 'nodes': [{ 'id': 0, 'label': '营口南楼经济开发区万利耐火材料厂', 'class': 'type-on' }, { 'id': 1, 'label': '轻烧窑1', 'class': 'type-on' }, { 'id': 2, 'label': '轻烧窑2', 'class': 'type-on' }, { 'id': 3, 'label': '轻烧窑3', 'class': 'type-on' }, { 'id': 4, 'label': '轻烧窑4', 'class': 'type-on' }, { 'id': 5, 'label': '除尘风机', 'class': 'type-on' }, { 'id': 6, 'label': '水泵', 'class': 'type-on' }], 'edges': [[1, 5], [2, 5], [3, 5], [4, 5], [5, 6], [0, 1], [0, 2], [0, 3], [0, 4]], 'errLine': [], 'errNodes': [] }

    companyGraphs.dsq118 = { 'nodes': [{ 'id': 0, 'label': '营口丰翌美业有限公司', 'class': 'type-on' }, { 'id': 1, 'label': '轻烧窑1', 'class': 'type-on' }, { 'id': 2, 'label': '轻烧窑2', 'class': 'type-on' }, { 'id': 3, 'label': '轻烧窑3', 'class': 'type-on' }, { 'id': 4, 'label': '轻烧窑4', 'class': 'type-on' }, { 'id': 5, 'label': '轻烧窑5', 'class': 'type-on' }, { 'id': 6, 'label': '除尘风机', 'class': 'type-on' }, { 'id': 7, 'label': '喷淋水泵1', 'class': 'type-on' }, { 'id': 8, 'label': '喷淋水泵2', 'class': 'type-on' }, { 'id': 9, 'label': '喷淋水泵3', 'class': 'type-on' }, { 'id': 10, 'label': '喷淋水泵4', 'class': 'type-on' }], 'edges': [[1, 6], [2, 6], [3, 6], [4, 6], [5, 6], [6, 7], [6, 8], [6, 9], [6, 10], [0, 1], [0, 2], [0, 3], [0, 4], [0, 5]], 'errLine': [], 'errNodes': [] }

    companyGraphs.dsq119 = {
        nodes: [
            { id: 0, label: '营口南楼经济开发区虹鉴菱镁厂', class: 'type-on' },
            { id: 1, label: '轻烧窑1', class: 'type-on' },
            { id: 2, label: '轻烧窑2', class: 'type-on' },
            { id: 3, label: '轻烧窑3', class: 'type-on' },
            { id: 4, label: '轻烧窑4', class: 'type-on' },
            { id: 5, label: '轻烧窑5', class: 'type-on' },
            { id: 6, label: '轻烧窑6', class: 'type-on' },
            { id: 7, label: '轻烧窑7', class: 'type-on' },
            { id: 8, label: '轻烧窑8', class: 'type-on' },
            { id: 9, label: '除尘风机1', class: 'type-on' },
            { id: 10, label: '喷淋水泵1', class: 'type-on' },
            { id: 11, label: '监控单元1', class: 'type-on' }
        ],
        edges: [
            [0, 1],
            [0, 2],
            [0, 3],
            [0, 4],
            [0, 5],
            [0, 6],
            [0, 7],
            [0, 8],
            [1, 9],
            [2, 9],
            [3, 9],
            [4, 9],
            [5, 9],
            [6, 9],
            [7, 9],
            [8, 9],
            [9, 10],
            [10, 11]
        ],
        errLine: [
        ],
        errNodes: [
        ]
    }

    companyGraphs.dsq120 = {
        nodes: [
            { id: 0, label: '营口新天特种矿产有限公司', class: 'type-on' },
            { id: 1, label: '轻烧窑1', class: 'type-on' },
            { id: 2, label: '轻烧窑2', class: 'type-on' },
            { id: 3, label: '重烧竖窑1', class: 'type-on' },
            { id: 4, label: '重烧竖窑2', class: 'type-on' },
            { id: 5, label: '除尘风机1', class: 'type-on' },
            { id: 6, label: '除尘风机2', class: 'type-on' },
            { id: 7, label: '喷淋水泵1', class: 'type-on' },
            { id: 8, label: '喷淋水泵2', class: 'type-on' },
            { id: 9, label: '监控单元1', class: 'type-on' },
            { id: 10, label: '监控单元2', class: 'type-on' }
        ],
        edges: [
            [0, 1],
            [0, 2],
            [0, 3],
            [0, 4],
            [1, 5],
            [2, 5],
            [3, 6],
            [4, 6],
            [5, 9],
            [6, 7],
            [6, 8],
            [7, 10],
            [8, 10]
        ],
        errLine: [
        ],
        errNodes: [
        ]
    }

    companyGraphs.dsq121 = {
        nodes: [
            { id: 0, label: '大石桥市三发耐火厂', class: 'type-on' },
            { id: 1, label: '重烧竖窑1', class: 'type-on' },
            { id: 2, label: '除尘风机1', class: 'type-on' },
            { id: 3, label: '喷淋水泵1', class: 'type-on' },
            { id: 4, label: '监控单元1', class: 'type-on' }
        ],
        edges: [
            [0, 1],
            [1, 2],
            [2, 3],
            [3, 4]
        ],
        errLine: [
        ],
        errNodes: [
        ]
    }

    companyGraphs.dsq122 = {
        nodes: [
            { id: 0, label: '营口镇隆镁制品厂', class: 'type-on' },
            { id: 1, label: '轻烧窑1', class: 'type-on' },
            { id: 2, label: '除尘风机1', class: 'type-on' },
            { id: 3, label: '喷淋水泵1', class: 'type-on' },
            { id: 4, label: '监控单元1', class: 'type-on' }
        ],
        edges: [
            [0, 1],
            [1, 2],
            [2, 3],
            [3, 4]
        ],
        errLine: [
        ],
        errNodes: [
        ]
    }

    companyGraphs.dsq123 = {
        nodes: [
            { id: 0, label: '辽宁腾飞耐火材料有限公司', class: 'type-on' },
            { id: 1, label: '轻烧窑7、8(一)', class: 'type-on' },
            { id: 2, label: '轻烧窑9、10(一)', class: 'type-on' },
            { id: 3, label: '轻烧窑1、2(二)', class: 'type-on' },
            { id: 4, label: '轻烧窑3、4(二)', class: 'type-on' },
            { id: 5, label: '轻烧窑5、6(二)', class: 'type-on' },
            { id: 6, label: '轻烧窑7(二)', class: 'type-on' },
            { id: 7, label: '轻烧窑8、9(二)', class: 'type-on' },
            { id: 8, label: '轻烧窑10、11(二)', class: 'type-on' },
            { id: 9, label: '重烧竖窑2', class: 'type-on' },
            { id: 10, label: '重烧竖窑3', class: 'type-on' },
            { id: 11, label: '重烧竖窑6', class: 'type-on' },
            { id: 12, label: '重烧竖窑7', class: 'type-on' },
            { id: 13, label: '重烧竖窑8', class: 'type-on' },
            { id: 14, label: '除尘风机1(轻烧用)', class: 'type-on' },
            { id: 15, label: '除尘风机2(轻烧用)', class: 'type-on' },
            { id: 16, label: '脱硫塔', class: 'type-on' },
            { id: 17, label: '除尘风机(重烧2,3)', class: 'type-on' },
            { id: 18, label: '除尘风机(重烧6,7,8)', class: 'type-on' },
            { id: 19, label: '喷淋水泵1(轻烧用)', class: 'type-on' },
            { id: 20, label: '喷淋水泵2(轻烧用)', class: 'type-on' },
            { id: 21, label: '喷淋水泵3(轻烧用)', class: 'type-on' },
            { id: 22, label: '喷淋水泵1(重烧2,3)', class: 'type-on' },
            { id: 23, label: '喷淋水泵2(重烧2,3)', class: 'type-on' },
            { id: 24, label: '喷淋水泵3(重烧2,3)', class: 'type-on' },
            { id: 25, label: '喷淋水泵1(重烧6,7,8)', class: 'type-on' },
            { id: 26, label: '喷淋水泵2(重烧6,7,8)', class: 'type-on' },
            { id: 27, label: '喷淋水泵3(重烧6,7,8)', class: 'type-on' },
            { id: 28, label: '轻烧(一车间,二车间)', class: 'type-on' },
            { id: 29, label: '重烧车间1', class: 'type-on' },
            { id: 30, label: '重烧车间2', class: 'type-on' }
        ],
        edges: [
            [0, 1],
            [0, 2],
            [0, 3],
            [0, 4],
            [0, 5],
            [0, 6],
            [0, 7],
            [0, 8],
            [0, 9],
            [0, 10],
            [0, 11],
            [0, 12],
            [0, 13],
            [1, 15],
            [2, 15],
            [3, 14],
            [4, 14],
            [5, 14],
            [6, 14],
            [7, 14],
            [8, 14],
            [14, 16],
            [15, 16],
            [9, 17],
            [10, 17],
            [11, 18],
            [12, 18],
            [13, 18],
            [16, 19],
            [16, 20],
            [16, 21],
            [17, 22],
            [17, 23],
            [17, 24],
            [18, 25],
            [18, 26],
            [18, 27],
            [19, 28],
            [20, 28],
            [21, 28],
            [22, 29],
            [23, 29],
            [24, 29],
            [25, 30],
            [26, 30],
            [27, 30]
        ],
        errLine: [
        ],
        errNodes: [
        ]
    }

    companyGraphs.dsq124 = {
        nodes: [
            { id: 0, label: '营口南楼经济开发区万源耐火材料厂', class: 'type-on' },
            { id: 1, label: '轻烧窑1', class: 'type-on' },
            { id: 2, label: '轻烧窑2', class: 'type-on' },
            { id: 3, label: '轻烧窑3', class: 'type-on' },
            { id: 4, label: '轻烧窑4', class: 'type-on' },
            { id: 5, label: '轻烧窑5', class: 'type-on' },
            { id: 6, label: '轻烧窑6', class: 'type-on' },
            { id: 7, label: '除尘风机', class: 'type-on' },
            { id: 8, label: '脱硫水泵1', class: 'type-on' },
            { id: 9, label: '脱硫水泵2', class: 'type-on' },
            { id: 10, label: '轻烧车间', class: 'type-on' }
        ],
        edges: [
            [0, 1],
            [0, 2],
            [0, 3],
            [0, 4],
            [0, 5],
            [0, 6],
            [1, 7],
            [2, 7],
            [3, 7],
            [4, 7],
            [5, 7],
            [6, 7],
            [7, 8],
            [7, 9],
            [8, 10],
            [9, 10]
        ],
        errLine: [
        ],
        errNodes: [
        ]
    }
    companyGraphs.dsq125 = {
        nodes: [
            { id: 0, label: '营口春海耐火材料有限公司', class: 'type-on' },
            { id: 1, label: '轻烧窑1', class: 'type-on' },
            { id: 2, label: '轻烧窑2', class: 'type-on' },
            { id: 3, label: '除尘风机', class: 'type-on' },
            { id: 4, label: '喷淋水泵', class: 'type-on' },
            { id: 5, label: '监控单元1', class: 'type-on' }
        ],
        edges: [
            [0, 1],
            [0, 2],
            [1, 3],
            [2, 3],
            [3, 4],
            [4, 5]
        ],
        errLine: [
        ],
        errNodes: [
        ]
    }

    companyGraphs.dsq126 = { 'nodes': [{ 'id': 0, 'label': '营口永源镁业有限公司', 'class': 'type-on' }, { 'id': 1, 'label': '轻烧窑1', 'class': 'type-on' }, { 'id': 2, 'label': '轻烧窑3', 'class': 'type-on' }, { 'id': 3, 'label': '轻烧窑2', 'class': 'type-on' }, { 'id': 4, 'label': '轻烧窑4', 'class': 'type-on' }, { 'id': 5, 'label': '除尘水泵1', 'class': 'type-on' }, { 'id': 6, 'label': '除尘风机1', 'class': 'type-on' }, { 'id': 7, 'label': '除尘水泵4', 'class': 'type-on' }, { 'id': 8, 'label': '除尘风机3', 'class': 'type-on' }, { 'id': 9, 'label': '监控单元1', 'class': 'type-on' }, { 'id': 10, 'label': '监控单元2', 'class': 'type-on' }], 'edges': [[1, 5], [3, 5], [2, 5], [4, 7], [7, 8], [9, 1], [9, 3], [10, 2], [10, 4], [0, 9], [0, 10], [5, 6]], 'errLine': [], 'errNodes': [] }

    companyGraphs.dsq127 = {
        nodes: [
            { id: 0, label: '营口新高科合成金属材料有限公司', class: 'type-on' },
            { id: 1, label: '电熔炉1', class: 'type-on' },
            { id: 2, label: '电熔炉2', class: 'type-on' },
            { id: 3, label: '电熔炉3', class: 'type-on' },
            { id: 4, label: '电熔炉4', class: 'type-on' },
            { id: 5, label: '除尘风机1', class: 'type-on' },
            { id: 6, label: '除尘风机2', class: 'type-on' },
            { id: 7, label: '监控单元1', class: 'type-on' }
        ],
        edges: [
            [0, 1],
            [0, 2],
            [0, 3],
            [0, 4],
            [1, 5],
            [2, 5],
            [3, 6],
            [4, 6],
            [5, 7],
            [6, 7]
        ],
        errLine: [
        ],
        errNodes: [
        ]
    }

    companyGraphs.dsq128 = {
        nodes: [
            { id: 0, label: '营口镇隆镁制品厂', class: 'type-on' },
            { id: 1, label: '轻烧窑1', class: 'type-on' },
            { id: 2, label: '除尘风机1', class: 'type-on' },
            { id: 3, label: '喷淋水泵1', class: 'type-on' },
            { id: 4, label: '监控单元1', class: 'type-on' }
        ],
        edges: [
            [0, 1],
            [1, 2],
            [2, 3],
            [3, 4]
        ],
        errLine: [
        ],
        errNodes: [
        ]
    }

    companyGraphs.dsq129 = {
        nodes: [
            { id: 0, label: '大石桥青花集团金桥耐火材料', class: 'type-on' },
            { id: 1, label: '隧道窑1(一车间)', class: 'type-on' },
            { id: 2, label: '隧道窑2(一车间)', class: 'type-on' },
            { id: 3, label: '隧道窑1(二车间)', class: 'type-on' },
            { id: 4, label: '隧道窑2(二车间)', class: 'type-on' },
            { id: 5, label: '隧道窑1(三车间)', class: 'type-on' },
            { id: 6, label: '隧道窑2(三车间)', class: 'type-on' },
            { id: 7, label: '隧道窑1(五车间)主', class: 'type-on' },
            { id: 8, label: '隧道窑1(五车间)备', class: 'type-on' },
            { id: 9, label: '隧道窑2(五车间)主', class: 'type-on' },
            { id: 10, label: '隧道窑2(五车间)备', class: 'type-on' },
            { id: 11, label: '除尘风机(一车间)', class: 'type-on' },
            { id: 12, label: '除尘风机(二车间)', class: 'type-on' },
            { id: 13, label: '除尘风机(三车间)', class: 'type-on' },
            { id: 14, label: '除尘风机(五车间)', class: 'type-on' },
            { id: 15, label: '循环水泵(一车间)主', class: 'type-on' },
            { id: 16, label: '循环水泵(一车间)备', class: 'type-on' },
            { id: 17, label: '循环水泵(二车间)主', class: 'type-on' },
            { id: 18, label: '循环水泵(二车间)备', class: 'type-on' },
            { id: 19, label: '循环水泵(三车间)主', class: 'type-on' },
            { id: 20, label: '循环水泵(三车间)备', class: 'type-on' },
            { id: 21, label: '循环水泵(五车间)主', class: 'type-on' },
            { id: 22, label: '循环水泵(五车间)备', class: 'type-on' },
            { id: 23, label: '金桥一车间', class: 'type-on' },
            { id: 24, label: '金桥二车间', class: 'type-on' },
            { id: 25, label: '金桥三车间', class: 'type-on' },
            { id: 26, label: '金桥五车间', class: 'type-on' }
        ],
        edges: [
            [0, 1],
            [0, 2],
            [0, 3],
            [0, 4],
            [0, 5],
            [0, 6],
            [0, 7],
            [0, 8],
            [1, 11],
            [2, 11],
            [3, 12],
            [4, 12],
            [5, 13],
            [6, 13],
            [7, 14],
            [8, 14],
            [9, 14],
            [10, 14],
            [11, 15],
            [11, 16],
            [12, 17],
            [12, 18],
            [13, 19],
            [13, 20],
            [14, 21],
            [14, 22],
            [15, 23],
            [16, 23],
            [17, 24],
            [18, 24],
            [19, 25],
            [20, 25],
            [21, 26],
            [22, 26]
        ],
        errLine: [
        ],
        errNodes: [
        ]
    }

    companyGraphs.dsq130 = { 'nodes': [{ 'id': 0, 'label': '大石桥市瑞奇化工有限公司', 'class': 'type-on' }, { 'id': 1, 'label': '重烧竖窑1', 'class': 'type-on' }, { 'id': 2, 'label': '脱硫水泵1', 'class': 'type-on' }, { 'id': 3, 'label': '脱硫水泵2', 'class': 'type-on' }, { 'id': 4, 'label': '脱硫水泵3', 'class': 'type-on' }, { 'id': 5, 'label': '脱硝水泵1', 'class': 'type-on' }, { 'id': 6, 'label': '脱硝水泵2', 'class': 'type-on' }, { 'id': 7, 'label': '脱硝水泵3', 'class': 'type-on' }, { 'id': 8, 'label': '除尘风机（重烧用）', 'class': 'type-on' }, { 'id': 9, 'label': '喷淋水泵1（备）', 'class': 'type-on' }, { 'id': 10, 'label': '喷淋水泵2（备）', 'class': 'type-on' }, { 'id': 11, 'label': '喷淋水泵3（备）', 'class': 'type-on' }, { 'id': 12, 'label': '喷淋水泵4（备）', 'class': 'type-on' }, { 'id': 13, 'label': '喷淋水泵5（备）', 'class': 'type-on' }, { 'id': 14, 'label': '喷淋水泵6（备）', 'class': 'type-on' }, { 'id': 15, 'label': '轻烧窑1', 'class': 'type-on' }, { 'id': 16, 'label': '轻烧窑2', 'class': 'type-on' }, { 'id': 17, 'label': '轻烧窑3', 'class': 'type-on' }, { 'id': 18, 'label': '轻烧窑4', 'class': 'type-on' }, { 'id': 19, 'label': '轻烧窑5', 'class': 'type-on' }, { 'id': 20, 'label': '轻烧窑6', 'class': 'type-on' }, { 'id': 21, 'label': '除尘风机（轻烧用）', 'class': 'type-on' }, { 'id': 22, 'label': '重烧竖窑2', 'class': 'type-on' }], 'edges': [[0, 1], [0, 22], [0, 15], [0, 16], [0, 17], [0, 18], [0, 19], [0, 20], [1, 2], [1, 3], [1, 4], [2, 5], [3, 6], [4, 7], [5, 8], [6, 8], [7, 8], [8, 9], [8, 10], [8, 11], [9, 12], [10, 13], [11, 14], [15, 21], [16, 21], [17, 21], [18, 21], [19, 21], [20, 21], [22, 2], [22, 3], [22, 4]], 'errLine': [], 'errNodes': [] }

    companyGraphs.dsq131 = {
        nodes: [
            { id: 0, label: '大石桥远峰耐火材料', class: 'type-on' },
            { id: 1, label: '轻烧窑1', class: 'type-on' },
            { id: 2, label: '轻烧窑2', class: 'type-on' },
            { id: 3, label: '轻烧窑3', class: 'type-on' },
            { id: 4, label: '轻烧窑4', class: 'type-on' },
            { id: 5, label: '除尘风机1', class: 'type-on' },
            { id: 6, label: '监控单元1', class: 'type-on' }
        ],
        edges: [
            [0, 1],
            [0, 2],
            [0, 3],
            [0, 4],
            [1, 5],
            [2, 5],
            [3, 5],
            [4, 5],
            [5, 6]
        ],
        errLine: [
        ],
        errNodes: [
        ]
    }

    companyGraphs.dsq132 = {
        nodes: [
            { id: 0, label: '大石桥胜春矿产品加工厂', class: 'type-on' },
            { id: 1, label: '轻烧窑1', class: 'type-on' },
            { id: 2, label: '轻烧窑2', class: 'type-on' },
            { id: 3, label: '除尘风机', class: 'type-on' },
            { id: 4, label: '喷淋水泵', class: 'type-on' },
            { id: 5, label: '监控单元1', class: 'type-on' }
        ],
        edges: [
            [0, 1],
            [0, 2],
            [1, 3],
            [2, 3],
            [3, 4],
            [4, 5]
        ],
        errLine: [
        ],
        errNodes: [
        ]
    }

    companyGraphs.dsq133 = {
        nodes: [
            { id: 0, label: '大石桥禄鸿镁制有限公司', class: 'type-on' },
            { id: 1, label: '轻烧窑1', class: 'type-on' },
            { id: 2, label: '轻烧窑2', class: 'type-on' },
            { id: 3, label: '轻烧窑3', class: 'type-on' },
            { id: 4, label: '轻烧窑4', class: 'type-on' },
            { id: 5, label: '除尘风机', class: 'type-on' },
            { id: 6, label: '监控单元1', class: 'type-on' }
        ],
        edges: [
            [0, 1],
            [0, 2],
            [0, 3],
            [0, 4],
            [1, 5],
            [2, 5],
            [3, 5],
            [4, 5],
            [5, 6]
        ],
        errLine: [
        ],
        errNodes: [
        ]
    }

    companyGraphs.dsq134 = {
        nodes: [
            { id: 0, label: '营口镇隆镁制品厂', class: 'type-on' },
            { id: 1, label: '轻烧窑1', class: 'type-on' },
            { id: 2, label: '除尘风机1', class: 'type-on' },
            { id: 3, label: '喷淋水泵1', class: 'type-on' },
            { id: 4, label: '监控单元1', class: 'type-on' }
        ],
        edges: [
            [0, 1],
            [1, 2],
            [2, 3],
            [3, 4]
        ],
        errLine: [
        ],
        errNodes: [
        ]
    }

    companyGraphs.dsq135 = {
        nodes: [
            { id: 0, label: '营口高科合成耐火材料有限公司（官屯）', class: 'type-on' },
            { id: 1, label: '电熔镁1', class: 'type-on' },
            { id: 2, label: '电熔镁2', class: 'type-on' },
            { id: 3, label: '电熔镁3', class: 'type-on' },
            { id: 4, label: '除尘风机1', class: 'type-on' },
            { id: 5, label: '除尘风机2', class: 'type-on' },
            { id: 6, label: '监控单元1', class: 'type-on' }
        ],
        edges: [
            [0, 1],
            [0, 2],
            [0, 3],
            [1, 4],
            [2, 4],
            [3, 5],
            [4, 6],
            [5, 6]
        ],
        errLine: [
        ],
        errNodes: [
        ]
    }

    companyGraphs.dsq136 = {
        nodes: [
            { id: 0, label: '营口明威耐火材料有限公司', class: 'type-on' },
            { id: 1, label: '隧道窑1', class: 'type-on' },
            { id: 2, label: '隧道窑2', class: 'type-on' },
            { id: 3, label: '除尘风机', class: 'type-on' },
            { id: 4, label: '监控单元1', class: 'type-on' }
        ],
        edges: [
            [0, 1],
            [0, 2],
            [1, 3],
            [2, 3],
            [3, 4]
        ],
        errLine: [
        ],
        errNodes: [
        ]
    }

    companyGraphs.dsq137 = {
        nodes: [
            { id: 0, label: '营口昊鼎耐火材料有限公司', class: 'type-on' },
            { id: 1, label: '轻烧窑1', class: 'type-on' },
            { id: 2, label: '轻烧窑2', class: 'type-on' },
            { id: 3, label: '轻烧窑3', class: 'type-on' },
            { id: 4, label: '轻烧窑4', class: 'type-on' },
            { id: 5, label: '除尘风机', class: 'type-on' },
            { id: 6, label: '喷淋水泵', class: 'type-on' },
            { id: 7, label: '监控单元1', class: 'type-on' }
        ],
        edges: [
            [0, 1],
            [0, 2],
            [0, 3],
            [0, 4],
            [1, 5],
            [2, 5],
            [3, 5],
            [4, 5],
            [5, 6],
            [6, 7]
        ],
        errLine: [
        ],
        errNodes: [
        ]
    }

    companyGraphs.dsq138 = {
        nodes: [
            { id: 0, label: '南楼经济开发区欣航镁制品', class: 'type-on' },
            { id: 1, label: '轻烧窑', class: 'type-on' },
            { id: 2, label: '除尘风机', class: 'type-on' },
            { id: 3, label: '喷淋水泵', class: 'type-on' },
            { id: 4, label: '监控单元1', class: 'type-on' }
        ],
        edges: [
            [0, 1],
            [1, 2],
            [2, 3],
            [3, 4]
        ],
        errLine: [
        ],
        errNodes: [
        ]
    }

    companyGraphs.dsq139 = {
        nodes: [
            { id: 0, label: '营口东成实业有限公司', class: 'type-on' },
            { id: 1, label: '电熔炉1', class: 'type-on' },
            { id: 2, label: '电熔炉2', class: 'type-on' },
            { id: 3, label: '电熔炉3', class: 'type-on' },
            { id: 4, label: '电熔炉4', class: 'type-on' },
            { id: 5, label: '电熔炉5', class: 'type-on' },
            { id: 6, label: '电熔炉6', class: 'type-on' },
            { id: 7, label: '电熔炉7', class: 'type-on' },
            { id: 8, label: '电熔炉8', class: 'type-on' },
            { id: 9, label: '电熔炉9', class: 'type-on' },
            { id: 10, label: '除尘风机1', class: 'type-on' },
            { id: 11, label: '除尘风机2', class: 'type-on' },
            { id: 12, label: '除尘风机3', class: 'type-on' },
            { id: 13, label: '除尘风机4', class: 'type-on' },
            { id: 14, label: '除尘风机5', class: 'type-on' },
            { id: 15, label: '除尘风机6', class: 'type-on' },
            { id: 16, label: '除尘风机7', class: 'type-on' },
            { id: 17, label: '除尘风机8', class: 'type-on' },
            { id: 18, label: '除尘风机9', class: 'type-on' },
            { id: 19, label: '监控单元1', class: 'type-on' }
        ],
        edges: [
            [0, 1],
            [0, 2],
            [0, 3],
            [0, 4],
            [0, 5],
            [0, 6],
            [0, 7],
            [0, 8],
            [0, 9],
            [1, 10],
            [2, 11],
            [3, 12],
            [4, 13],
            [5, 14],
            [6, 15],
            [7, 16],
            [8, 17],
            [9, 18],
            [10, 19],
            [11, 19],
            [12, 19],
            [13, 19],
            [14, 19],
            [15, 19],
            [16, 19],
            [17, 19],
            [18, 19]
        ],
        errLine: [
        ],
        errNodes: [
        ]
    }

    companyGraphs.dsq140 = {
        nodes: [
            { id: 0, label: '营口南楼经济开发区东晨耐火材料有限公司', class: 'type-on' },
            { id: 1, label: '轻烧窑1', class: 'type-on' },
            { id: 2, label: '轻烧窑2', class: 'type-on' },
            { id: 3, label: '除尘风机', class: 'type-on' },
            { id: 4, label: '喷淋水泵1', class: 'type-on' },
            { id: 5, label: '喷淋水泵2', class: 'type-on' },
            { id: 6, label: '监控单元1', class: 'type-on' }
        ],
        edges: [
            [0, 1],
            [0, 2],
            [1, 3],
            [2, 3],
            [3, 4],
            [3, 5],
            [4, 6],
            [5, 6]
        ],
        errLine: [
        ],
        errNodes: [
        ]
    }

    companyGraphs.dsq141 = { 'nodes': [{ 'id': 1, 'label': '营口东伟鹏耐火有限公司', 'class': 'type-on' }, { 'id': 2, 'label': '重烧竖窑1', 'class': 'type-on' }, { 'id': 3, 'label': '重烧竖窑2', 'class': 'type-on' }, { 'id': 4, 'label': '除尘风机', 'class': 'type-on' }, { 'id': 5, 'label': '脱硫水泵1', 'class': 'type-on' }, { 'id': 6, 'label': '脱硫水泵2', 'class': 'type-on' }], 'edges': [[1, 2], [1, 3], [2, 4], [3, 4], [4, 5], [4, 6]], 'errLine': [], 'errNodes': [] }

    companyGraphs.dsq142 = {
        nodes: [
            { id: 0, label: '辽宁信威环保科技有限公司', class: 'type-on' },
            { id: 1, label: '重烧竖窑1(主)', class: 'type-on' },
            { id: 2, label: '重烧竖窑1(备)', class: 'type-on' },
            { id: 3, label: '重烧竖窑2(主)', class: 'type-on' },
            { id: 4, label: '重烧竖窑2(备)', class: 'type-on' },
            { id: 5, label: '重烧竖窑3(主)', class: 'type-on' },
            { id: 6, label: '重烧竖窑3(备)', class: 'type-on' },
            { id: 7, label: '重烧竖窑4(主)', class: 'type-on' },
            { id: 8, label: '重烧竖窑4(备)', class: 'type-on' },
            { id: 9, label: '除尘风机1', class: 'type-on' },
            { id: 10, label: '除尘风机2', class: 'type-on' },
            { id: 11, label: '除尘风机3', class: 'type-on' },
            { id: 12, label: '除尘风机4', class: 'type-on' },
            { id: 13, label: '脱硫塔1', class: 'type-on' },
            { id: 14, label: '脱硫塔2', class: 'type-on' },
            { id: 15, label: '喷淋水泵', class: 'type-on' },
            { id: 16, label: '喷淋水泵1', class: 'type-on' },
            { id: 17, label: '循环水泵', class: 'type-on' },
            { id: 18, label: '循环水泵1', class: 'type-on' },
            { id: 19, label: '循环水泵2', class: 'type-on' },
            { id: 20, label: '重烧车间A,B,C', class: 'type-on' },
            { id: 21, label: '重烧车间D', class: 'type-on' }
        ],
        edges: [
            [0, 1],
            [0, 2],
            [0, 3],
            [0, 4],
            [0, 5],
            [0, 6],
            [0, 7],
            [0, 8],
            [1, 9],
            [2, 9],
            [3, 10],
            [4, 10],
            [5, 11],
            [6, 11],
            [7, 12],
            [8, 12],
            [9, 13],
            [10, 13],
            [11, 13],
            [12, 14],
            [13, 16],
            [13, 18],
            [13, 19],
            [14, 15],
            [14, 17],
            [16, 20],
            [18, 20],
            [19, 20],
            [15, 21],
            [17, 21]
        ],
        errLine: [
        ],
        errNodes: [
        ]
    }

    companyGraphs.dsq143 = {
        nodes: [
            { id: 0, label: '大石桥市富山耐火材料有限公司', class: 'type-on' },
            { id: 1, label: '电熔镁1', class: 'type-on' },
            { id: 2, label: '电熔镁2', class: 'type-on' },
            { id: 3, label: '电熔镁3', class: 'type-on' },
            { id: 4, label: '电熔镁4', class: 'type-on' },
            { id: 5, label: '除尘风机1', class: 'type-on' },
            { id: 6, label: '除尘风机2', class: 'type-on' },
            { id: 7, label: '除尘风机4', class: 'type-on' },
            { id: 8, label: '监控单元1', class: 'type-on' },
            { id: 9, label: '监控单元2', class: 'type-on' }
        ],
        edges: [
            [0, 1],
            [0, 2],
            [0, 3],
            [0, 4],
            [1, 5],
            [2, 5],
            [3, 6],
            [4, 7],
            [5, 8],
            [6, 9],
            [7, 9]
        ],
        errLine: [
        ],
        errNodes: [
        ]
    }

    companyGraphs.dsq144 = {
        nodes: [
            { id: 0, label: '大石桥市海镁烧结厂', class: 'type-on' },
            { id: 1, label: '轻烧窑1', class: 'type-on' },
            { id: 2, label: '轻烧窑2', class: 'type-on' },
            { id: 3, label: '轻烧窑3', class: 'type-on' },
            { id: 4, label: '轻烧窑4', class: 'type-on' },
            { id: 5, label: '轻烧窑5', class: 'type-on' },
            { id: 6, label: '轻烧窑6', class: 'type-on' },
            { id: 7, label: '轻烧窑7', class: 'type-on' },
            { id: 8, label: '轻烧窑8', class: 'type-on' },
            { id: 9, label: '除尘风机', class: 'type-on' },
            { id: 10, label: '脱硫水泵', class: 'type-on' },
            { id: 11, label: '监控单元1', class: 'type-on' }
        ],
        edges: [
            [0, 1],
            [0, 2],
            [0, 3],
            [0, 4],
            [0, 5],
            [0, 6],
            [0, 7],
            [0, 8],
            [1, 9],
            [2, 9],
            [3, 9],
            [4, 9],
            [5, 9],
            [6, 9],
            [7, 9],
            [8, 9],
            [9, 10],
            [10, 11]
        ],
        errLine: [
        ],
        errNodes: [
        ]
    }

    companyGraphs.dsq145 = { 'nodes': [{ 'id': 0, 'label': '辽宁奥鼎镁业有限公司', 'class': 'type-on' }, { 'id': 1, 'label': '重烧竖窑', 'class': 'type-on' }, { 'id': 2, 'label': '电熔镁1', 'class': 'type-on' }, { 'id': 3, 'label': '电熔镁2', 'class': 'type-on' }, { 'id': 4, 'label': '电熔镁3', 'class': 'type-on' }, { 'id': 5, 'label': '电熔镁4', 'class': 'type-on' }, { 'id': 6, 'label': '除尘风机2', 'class': 'type-on' }, { 'id': 7, 'label': '除尘风机1', 'class': 'type-on' }, { 'id': 8, 'label': '除尘风机4', 'class': 'type-on' }, { 'id': 9, 'label': '除尘风机5', 'class': 'type-on' }, { 'id': 10, 'label': '除尘风机3', 'class': 'type-on' }, { 'id': 11, 'label': '喷淋水泵1', 'class': 'type-on' }, { 'id': 12, 'label': '喷淋水泵2', 'class': 'type-on' }], 'edges': [[0, 2], [0, 3], [0, 4], [0, 5], [0, 1], [2, 7], [3, 6], [4, 10], [5, 8], [1, 9], [9, 11], [9, 12]], 'errLine': [], 'errNodes': [] }

    companyGraphs.dsq146 = { 'nodes': [{ 'id': 0, 'label': '营口大益矿产品有限公司', 'class': 'type-on' }, { 'id': 1, 'label': '电熔炉1', 'class': 'type-on' }, { 'id': 2, 'label': '电熔炉2', 'class': 'type-on' }, { 'id': 3, 'label': '电熔炉3', 'class': 'type-on' }, { 'id': 4, 'label': '电熔炉4', 'class': 'type-on' }, { 'id': 8, 'label': '除尘风机1', 'class': 'type-on' }, { 'id': 9, 'label': '除尘风机2', 'class': 'type-on' }, { 'id': 12, 'label': '电熔炉1', 'class': 'type-on' }, { 'id': 13, 'label': '电熔炉2', 'class': 'type-on' }, { 'id': 17, 'label': '（电熔炉A）一车间', 'class': 'type-on' }, { 'id': 18, 'label': '（电熔炉B）一车间', 'class': 'type-on' }, { 'id': 19, 'label': '电熔炉5', 'class': 'type-on' }, { 'id': 20, 'label': '除尘风机3', 'class': 'type-on' }, { 'id': 21, 'label': '（电熔炉A）二车间', 'class': 'type-on' }, { 'id': 22, 'label': '除尘风机1', 'class': 'type-on' }, { 'id': 23, 'label': '除尘风机2', 'class': 'type-on' }, { 'id': 24, 'label': '（电熔炉B）二车间', 'class': 'type-on' }, { 'id': 25, 'label': '电熔炉3', 'class': 'type-on' }, { 'id': 26, 'label': '除尘风机3', 'class': 'type-on' }, { 'id': 27, 'label': '电熔炉4', 'class': 'type-on' }, { 'id': 28, 'label': '除尘风机4', 'class': 'type-on' }], 'edges': [[1, 8], [2, 8], [3, 9], [4, 20], [19, 20], [12, 22], [13, 23], [21, 12], [21, 13], [17, 1], [17, 2], [18, 3], [18, 4], [18, 19], [25, 26], [27, 28], [24, 25], [24, 27], [0, 17], [0, 18], [0, 21], [0, 24]], 'errLine': [], 'errNodes': [] }

    companyGraphs.dsq147 = {
        nodes: [
            { id: 0, label: '大石桥市德昌耐火材料厂', class: 'type-on' },
            { id: 1, label: '轻烧窑', class: 'type-on' },
            { id: 2, label: '轻烧窑1', class: 'type-on' },
            { id: 3, label: '除尘风机', class: 'type-on' },
            { id: 4, label: '脱硝水泵1', class: 'type-on' },
            { id: 5, label: '脱硝水泵2', class: 'type-on' },
            { id: 6, label: '脱硫水泵1', class: 'type-on' },
            { id: 7, label: '脱硫水泵2', class: 'type-on' },
            { id: 8, label: '监控单元1', class: 'type-on' }
        ],
        edges: [
            [0, 1],
            [0, 2],
            [1, 3],
            [2, 3],
            [3, 4],
            [3, 5],
            [4, 6],
            [5, 6],
            [4, 7],
            [5, 7],
            [6, 8],
            [7, 8]
        ],
        errLine: [
        ],
        errNodes: [
        ]
    }

    companyGraphs.dsq148 = {
        nodes: [
            { id: 0, label: '大石桥市正兴菱镁材料厂', class: 'type-on' },
            { id: 1, label: '轻烧窑1', class: 'type-on' },
            { id: 2, label: '轻烧窑2', class: 'type-on' },
            { id: 3, label: '轻烧窑3', class: 'type-on' },
            { id: 4, label: '轻烧窑4', class: 'type-on' },
            { id: 5, label: '除尘风机', class: 'type-on' },
            { id: 6, label: '喷淋水泵1', class: 'type-on' },
            { id: 7, label: '喷淋水泵2', class: 'type-on' },
            { id: 8, label: '监控单元1', class: 'type-on' }
        ],
        edges: [
            [0, 1],
            [0, 2],
            [0, 3],
            [0, 4],
            [1, 5],
            [2, 5],
            [3, 5],
            [4, 5],
            [5, 6],
            [5, 7],
            [6, 8],
            [7, 8]
        ],
        errLine: [
        ],
        errNodes: [
        ]
    }

    companyGraphs.dsq149 = {
        nodes: [
            { id: 0, label: '营口镇隆镁制品厂', class: 'type-on' },
            { id: 1, label: '轻烧窑1', class: 'type-on' },
            { id: 2, label: '除尘风机1', class: 'type-on' },
            { id: 3, label: '喷淋水泵1', class: 'type-on' },
            { id: 4, label: '监控单元1', class: 'type-on' }
        ],
        edges: [
            [0, 1],
            [1, 2],
            [2, 3],
            [3, 4]
        ],
        errLine: [
        ],
        errNodes: [
        ]
    }

    companyGraphs.dsq150 = {
        nodes: [
            { id: 0, label: '辽宁新发展耐火材料集团有限公司', class: 'type-on' },
            { id: 1, label: '电熔镁1', class: 'type-on' },
            { id: 2, label: '电熔镁2', class: 'type-on' },
            { id: 3, label: '电熔镁3', class: 'type-on' },
            { id: 4, label: '电熔镁5', class: 'type-on' },
            { id: 5, label: '电熔镁6', class: 'type-on' },
            { id: 6, label: '电熔镁7', class: 'type-on' },
            { id: 7, label: '电熔镁8', class: 'type-on' },
            { id: 8, label: '电熔镁9', class: 'type-on' },
            { id: 9, label: '除尘风机1-1', class: 'type-on' },
            { id: 10, label: '除尘风机1-2', class: 'type-on' },
            { id: 11, label: '除尘风机2', class: 'type-on' },
            { id: 12, label: '除尘风机3-1', class: 'type-on' },
            { id: 13, label: '除尘风机3-2', class: 'type-on' },
            { id: 14, label: '除尘风机5-1', class: 'type-on' },
            { id: 15, label: '除尘风机5-2', class: 'type-on' },
            { id: 16, label: '除尘风机6', class: 'type-on' },
            { id: 17, label: '除尘风机7-1', class: 'type-on' },
            { id: 18, label: '除尘风机7-2', class: 'type-on' },
            { id: 19, label: '除尘风机8', class: 'type-on' },
            { id: 20, label: '除尘风机9-1', class: 'type-on' },
            { id: 21, label: '除尘风机9-2', class: 'type-on' },
            { id: 22, label: '监控单元1', class: 'type-on' },
            { id: 23, label: '监控单元2', class: 'type-on' }
        ],
        edges: [
            [0, 1],
            [0, 2],
            [0, 3],
            [0, 4],
            [0, 5],
            [0, 6],
            [0, 7],
            [0, 8],
            [1, 9],
            [1, 10],
            [2, 11],
            [3, 12],
            [3, 13],
            [4, 14],
            [4, 15],
            [5, 16],
            [6, 17],
            [6, 18],
            [7, 19],
            [8, 20],
            [8, 21],
            [9, 22],
            [10, 22],
            [11, 22],
            [12, 22],
            [13, 22],
            [14, 22],
            [15, 22],
            [16, 23],
            [17, 23],
            [18, 23],
            [19, 23],
            [20, 23],
            [21, 23]
        ],
        errLine: [
        ],
        errNodes: [
        ]
    }

    companyGraphs.dsq151 = {
        nodes: [
            { id: 0, label: '营口南楼经济开发区嘉美耐火材料有限公司', class: 'type-on' },
            { id: 1, label: '重烧竖窑1', class: 'type-on' },
            { id: 2, label: '重烧竖窑2', class: 'type-on' },
            { id: 3, label: '重烧竖窑3', class: 'type-on' },
            { id: 4, label: '重烧竖窑4', class: 'type-on' },
            { id: 5, label: '冷却水泵', class: 'type-on' },
            { id: 6, label: '除尘风机', class: 'type-on' },
            { id: 7, label: '喷淋水泵1', class: 'type-on' },
            { id: 8, label: '喷淋水泵2', class: 'type-on' },
            { id: 9, label: '监控单元1', class: 'type-on' }
        ],
        edges: [
            [0, 1],
            [0, 2],
            [0, 3],
            [0, 4],
            [1, 5],
            [2, 5],
            [3, 5],
            [4, 5],
            [5, 6],
            [6, 7],
            [6, 8],
            [7, 9],
            [8, 9]
        ],
        errLine: [
        ],
        errNodes: [
        ]
    }

    companyGraphs.dsq152 = {
        nodes: [
            { id: 0, label: '营口宏洋耐火材料有限公司', class: 'type-on' },
            { id: 1, label: '重烧竖窑1', class: 'type-on' },
            { id: 2, label: '重烧竖窑2', class: 'type-on' },
            { id: 3, label: '重烧竖窑3', class: 'type-on' },
            { id: 4, label: '重烧竖窑4', class: 'type-on' },
            { id: 5, label: '除尘风机', class: 'type-on' },
            { id: 6, label: '脱硝水泵', class: 'type-on' },
            { id: 7, label: '脱硫塔1', class: 'type-on' },
            { id: 8, label: '脱硫塔2', class: 'type-on' },
            { id: 9, label: '脱硫塔3', class: 'type-on' },
            { id: 10, label: '脱硫塔4', class: 'type-on' },
            { id: 11, label: '监控单元1', class: 'type-on' }
        ],
        edges: [
            [0, 1],
            [0, 2],
            [0, 3],
            [0, 4],
            [1, 5],
            [2, 5],
            [3, 5],
            [4, 5],
            [5, 6],
            [6, 7],
            [7, 8],
            [8, 9],
            [9, 10],
            [10, 11]
        ],
        errLine: [
        ],
        errNodes: [
        ]
    }

    companyGraphs.dsq153 = {
        nodes: [
            { id: 0, label: '营口仁恒镁业有限公司', class: 'type-on' },
            { id: 1, label: '轻烧窑1', class: 'type-on' },
            { id: 2, label: '轻烧窑2', class: 'type-on' },
            { id: 3, label: '轻烧窑3', class: 'type-on' },
            { id: 4, label: '轻烧窑4', class: 'type-on' },
            { id: 5, label: '轻烧窑5', class: 'type-on' },
            { id: 6, label: '轻烧窑6', class: 'type-on' },
            { id: 7, label: '除尘风机1', class: 'type-on' },
            { id: 8, label: '除尘风机2', class: 'type-on' },
            { id: 9, label: '监控单元1', class: 'type-on' },
            { id: 10, label: '监控单元2', class: 'type-on' }
        ],
        edges: [
            [0, 1],
            [0, 2],
            [0, 3],
            [0, 4],
            [0, 5],
            [0, 6],
            [1, 7],
            [2, 7],
            [3, 7],
            [4, 7],
            [5, 8],
            [6, 8],
            [7, 9],
            [8, 10]
        ],
        errLine: [
        ],
        errNodes: [
        ]
    }

    companyGraphs.dsq154 = {
        nodes: [
            { id: 0, label: '营口品瑞合成耐火材料有限公司', class: 'type-on' },
            { id: 1, label: '电熔镁1', class: 'type-on' },
            { id: 2, label: '电熔镁2', class: 'type-on' },
            { id: 3, label: '电熔镁3', class: 'type-on' },
            { id: 4, label: '电熔镁4', class: 'type-on' },
            { id: 5, label: '电熔镁5', class: 'type-on' },
            { id: 6, label: '除尘风机1', class: 'type-on' },
            { id: 7, label: '除尘风机2', class: 'type-on' },
            { id: 8, label: '除尘风机3', class: 'type-on' },
            { id: 9, label: '电熔车间北', class: 'type-on' },
            { id: 10, label: '电熔车间南', class: 'type-on' }
        ],
        edges: [
            [0, 1],
            [0, 2],
            [0, 3],
            [0, 4],
            [0, 5],
            [1, 6],
            [2, 7],
            [3, 8],
            [4, 8],
            [5, 8],
            [6, 10],
            [7, 10],
            [8, 9]
        ],
        errLine: [
        ],
        errNodes: [
        ]
    }

    companyGraphs.dsq155 = {
        nodes: [
            { id: 0, label: '营口高科合成耐火材料有限公司（南楼）', class: 'type-on' },
            { id: 1, label: '电熔镁1', class: 'type-on' },
            { id: 2, label: '电熔镁2', class: 'type-on' },
            { id: 3, label: '电熔镁3', class: 'type-on' },
            { id: 4, label: '电熔镁4', class: 'type-on' },
            { id: 5, label: '电熔镁5', class: 'type-on' },
            { id: 6, label: '电熔镁6', class: 'type-on' },
            { id: 7, label: '电熔镁7', class: 'type-on' },
            { id: 8, label: '电熔镁8', class: 'type-on' },
            { id: 9, label: '除尘风机1', class: 'type-on' },
            { id: 10, label: '除尘风机2', class: 'type-on' },
            { id: 11, label: '除尘风机3', class: 'type-on' },
            { id: 12, label: '除尘风机4', class: 'type-on' },
            { id: 13, label: '除尘风机5', class: 'type-on' },
            { id: 14, label: '除尘风机6', class: 'type-on' },
            { id: 15, label: '除尘风机7', class: 'type-on' },
            { id: 16, label: '除尘风机8', class: 'type-on' },
            { id: 17, label: '电熔东车间A', class: 'type-on' },
            { id: 18, label: '电熔东车间B', class: 'type-on' },
            { id: 19, label: '监控单元3', class: 'type-on' },
            { id: 20, label: '监控单元4', class: 'type-on' }
        ],
        edges: [
            [0, 1],
            [0, 2],
            [0, 3],
            [0, 4],
            [0, 5],
            [0, 6],
            [0, 7],
            [0, 8],
            [1, 9],
            [2, 10],
            [3, 11],
            [4, 12],
            [5, 13],
            [6, 14],
            [7, 15],
            [8, 16],
            [9, 17],
            [10, 17],
            [11, 18],
            [12, 18],
            [13, 19],
            [14, 19],
            [15, 20],
            [16, 20]
        ],
        errLine: [
        ],
        errNodes: [
        ]
    }

    companyGraphs.dsq156 = {
        nodes: [
            { id: 0, label: '营口鸿顺耐火材料有限公司', class: 'type-on' },
            { id: 1, label: '轻烧窑1', class: 'type-on' },
            { id: 2, label: '轻烧窑2', class: 'type-on' },
            { id: 3, label: '重烧竖窑1', class: 'type-on' },
            { id: 4, label: '重烧竖窑2', class: 'type-on' },
            { id: 5, label: '除尘风机(轻烧用)', class: 'type-on' },
            { id: 6, label: '除尘风机(重烧用)', class: 'type-on' },
            { id: 7, label: '喷淋水泵1(轻烧用)', class: 'type-on' },
            { id: 8, label: '喷淋水泵2(轻烧用)', class: 'type-on' },
            { id: 9, label: '喷淋水泵(重烧用)', class: 'type-on' },
            { id: 10, label: '脱硫水泵', class: 'type-on' },
            { id: 11, label: '轻烧车间', class: 'type-on' },
            { id: 12, label: '重烧车间', class: 'type-on' }
        ],
        edges: [
            [0, 1],
            [0, 2],
            [0, 3],
            [0, 4],
            [1, 5],
            [2, 5],
            [3, 6],
            [4, 6],
            [5, 7],
            [5, 8],
            [6, 9],
            [6, 10],
            [7, 11],
            [8, 11],
            [9, 12],
            [10, 12]
        ],
        errLine: [
        ],
        errNodes: [
        ]
    }

    companyGraphs.dsq157 =
        { 'nodes': [{ 'id': 0, 'label': '营口鑫圣冶金炉料有限公司', 'class': 'type-on' }, { 'id': 1, 'label': '重烧竖窑1', 'class': 'type-on' }, { 'id': 2, 'label': '重烧竖窑2', 'class': 'type-on' }, { 'id': 3, 'label': '除尘风机', 'class': 'type-on' }, { 'id': 4, 'label': '脱硫水泵1', 'class': 'type-on' }, { 'id': 5, 'label': '脱硫水泵2', 'class': 'type-on' }], 'edges': [[1, 3], [2, 3], [3, 4], [3, 5], [0, 1], [0, 2]], 'errLine': [], 'errNodes': [] }

    companyGraphs.dsq158 = {
        nodes: [
            { id: 0, label: '营口全顺佳明耐火材料有限公司', class: 'type-on' },
            { id: 1, label: '隧道窑1(主)', class: 'type-on' },
            { id: 2, label: '隧道窑1(备)', class: 'type-on' },
            { id: 3, label: '隧道窑2(主)', class: 'type-on' },
            { id: 4, label: '隧道窑2(备)', class: 'type-on' },
            { id: 5, label: '除尘风机', class: 'type-on' },
            { id: 6, label: '脱硫塔', class: 'type-on' },
            { id: 7, label: '脱硫水泵1', class: 'type-on' },
            { id: 8, label: '脱硫水泵2', class: 'type-on' },
            { id: 9, label: '脱硫水泵3', class: 'type-on' },
            { id: 10, label: '脱硝塔', class: 'type-on' },
            { id: 11, label: '脱硝水泵1', class: 'type-on' },
            { id: 12, label: '脱硝水泵2', class: 'type-on' },
            { id: 13, label: '脱硝水泵3', class: 'type-on' },
            { id: 14, label: '监控单元1', class: 'type-on' }
        ],
        edges: [
            [0, 1],
            [0, 2],
            [0, 3],
            [0, 4],
            [1, 5],
            [2, 5],
            [3, 5],
            [4, 5],
            [5, 6],
            [6, 7],
            [6, 8],
            [6, 9],
            [7, 10],
            [8, 10],
            [9, 10],
            [10, 11],
            [10, 12],
            [10, 13],
            [11, 14],
            [12, 14],
            [13, 14]
        ],
        errLine: [
        ],
        errNodes: [
        ]
    }

    companyGraphs.dsq159 = {
        nodes: [
            { id: 0, label: '营口镇隆镁制品厂', class: 'type-on' },
            { id: 1, label: '轻烧窑1', class: 'type-on' },
            { id: 2, label: '除尘风机1', class: 'type-on' },
            { id: 3, label: '喷淋水泵1', class: 'type-on' },
            { id: 4, label: '监控单元1', class: 'type-on' }
        ],
        edges: [
            [0, 1],
            [1, 2],
            [2, 3],
            [3, 4]
        ],
        errLine: [
        ],
        errNodes: [
        ]
    }

    companyGraphs.dsq160 =
        { 'nodes': [{ 'id': 0, 'label': '大石桥市中兴菱镁材料有限公司', 'class': 'type-on' }, { 'id': 1, 'label': '轻烧窑1', 'class': 'type-on' }, { 'id': 2, 'label': '轻烧窑2', 'class': 'type-on' }, { 'id': 3, 'label': '除尘风机', 'class': 'type-on' }], 'edges': [[0, 1], [0, 2], [1, 3], [2, 3]], 'errLine': [], 'errNodes': [] }

    companyGraphs.dsq161 = { 'nodes': [{ 'id': 0, 'label': '辽宁麓丰矿业有限公司', 'class': 'type-on' }, { 'id': 1, 'label': '重烧竖窑1', 'class': 'type-on' }, { 'id': 2, 'label': '重烧竖窑2', 'class': 'type-on' }, { 'id': 3, 'label': '重烧竖窑3', 'class': 'type-on' }, { 'id': 4, 'label': '重烧竖窑4', 'class': 'type-on' }, { 'id': 5, 'label': '除尘风机北', 'class': 'type-on' }, { 'id': 6, 'label': '喷淋水泵', 'class': 'type-on' }, { 'id': 7, 'label': '冲洗水泵', 'class': 'type-on' }, { 'id': 8, 'label': '重烧竖窑5', 'class': 'type-on' }, { 'id': 9, 'label': '重烧竖窑6', 'class': 'type-on' }, { 'id': 10, 'label': '重烧竖窑7', 'class': 'type-on' }, { 'id': 11, 'label': '重烧竖窑8', 'class': 'type-on' }, { 'id': 12, 'label': '除尘风机东(重烧)', 'class': 'type-on' }, { 'id': 13, 'label': '除尘风机西(重烧)', 'class': 'type-on' }, { 'id': 14, 'label': '喷淋水泵东(主)', 'class': 'type-on' }, { 'id': 15, 'label': '喷淋水泵东(备)', 'class': 'type-on' }, { 'id': 16, 'label': '喷淋水泵西(备)', 'class': 'type-on' }, { 'id': 17, 'label': '喷淋水泵西(主)', 'class': 'type-on' }, { 'id': 18, 'label': '电熔镁1', 'class': 'type-on' }, { 'id': 19, 'label': '电熔镁2', 'class': 'type-on' }, { 'id': 20, 'label': '电熔镁3', 'class': 'type-on' }, { 'id': 21, 'label': '电熔镁4', 'class': 'type-on' }, { 'id': 22, 'label': '除尘风机1', 'class': 'type-on' }, { 'id': 23, 'label': '除尘风机2', 'class': 'type-on' }, { 'id': 24, 'label': '电熔镁5', 'class': 'type-on' }, { 'id': 25, 'label': '电熔镁6', 'class': 'type-on' }, { 'id': 26, 'label': '电熔镁7', 'class': 'type-on' }, { 'id': 27, 'label': '电熔镁8', 'class': 'type-on' }, { 'id': 28, 'label': '除尘风机3', 'class': 'type-on' }, { 'id': 29, 'label': '除尘风机4', 'class': 'type-on' }, { 'id': 30, 'label': '轻烧窑1', 'class': 'type-on' }, { 'id': 31, 'label': '轻烧窑2', 'class': 'type-on' }, { 'id': 32, 'label': '轻烧窑3', 'class': 'type-on' }, { 'id': 33, 'label': '轻烧窑4', 'class': 'type-on' }, { 'id': 34, 'label': '轻烧窑5', 'class': 'type-on' }, { 'id': 35, 'label': '轻烧窑6', 'class': 'type-on' }, { 'id': 36, 'label': '轻烧窑7', 'class': 'type-on' }, { 'id': 37, 'label': '轻烧窑8', 'class': 'type-on' }, { 'id': 38, 'label': '轻烧窑9', 'class': 'type-on' }, { 'id': 39, 'label': '轻烧窑10', 'class': 'type-on' }, { 'id': 40, 'label': '轻烧窑11', 'class': 'type-on' }, { 'id': 41, 'label': '轻烧窑12', 'class': 'type-on' }, { 'id': 42, 'label': '轻烧窑13', 'class': 'type-on' }, { 'id': 43, 'label': '轻烧窑14', 'class': 'type-on' }, { 'id': 44, 'label': '轻烧窑15', 'class': 'type-on' }, { 'id': 45, 'label': '轻烧窑16', 'class': 'type-on' }, { 'id': 46, 'label': '除尘风机东', 'class': 'type-on' }, { 'id': 47, 'label': '除尘风机西', 'class': 'type-on' }, { 'id': 48, 'label': '脱硫水泵1', 'class': 'type-on' }, { 'id': 49, 'label': '脱硫水泵2', 'class': 'type-on' }, { 'id': 50, 'label': '脱硫水泵3', 'class': 'type-on' }], 'edges': [[1, 5], [2, 5], [3, 5], [5, 6], [5, 7], [4, 12], [8, 12], [9, 12], [10, 12], [11, 12], [12, 13], [13, 14], [13, 15], [14, 17], [15, 16], [18, 22], [19, 22], [20, 23], [21, 23], [24, 28], [25, 28], [26, 29], [27, 29], [30, 47], [31, 47], [32, 47], [34, 47], [35, 47], [36, 47], [37, 47], [38, 46], [39, 46], [40, 46], [41, 46], [42, 46], [43, 46], [44, 46], [45, 46], [47, 48], [47, 49], [47, 50], [46, 48], [46, 50], [33, 47], [46, 49]], 'errLine': [], 'errNodes': [] }

    companyGraphs.dsq162 = {
        nodes: [
            { id: 0, label: '营口山旺耐火材料有限公司', class: 'type-on' },
            { id: 1, label: '轻烧窑1', class: 'type-on' },
            { id: 2, label: '轻烧窑2', class: 'type-on' },
            { id: 3, label: '轻烧窑3', class: 'type-on' },
            { id: 4, label: '轻烧窑4', class: 'type-on' },
            { id: 5, label: '轻烧窑5', class: 'type-on' },
            { id: 6, label: '轻烧窑6', class: 'type-on' },
            { id: 7, label: '除尘风机', class: 'type-on' },
            { id: 8, label: '喷淋水泵', class: 'type-on' },
            { id: 9, label: '监控单元1', class: 'type-on' }
        ],
        edges: [
            [0, 1],
            [0, 2],
            [0, 3],
            [0, 4],
            [0, 5],
            [0, 6],
            [1, 7],
            [2, 7],
            [3, 7],
            [4, 7],
            [5, 7],
            [6, 7],
            [7, 8],
            [8, 9]
        ],
        errLine: [
        ],
        errNodes: [
        ]
    }

    companyGraphs.dsq163 =
        { 'nodes': [{ 'id': 2, 'label': '营口东恒耐火材料有限公司', 'class': 'type-on' }, { 'id': 3, 'label': '重烧竖窑1', 'class': 'type-on' }, { 'id': 4, 'label': '重烧竖窑2', 'class': 'type-on' }, { 'id': 5, 'label': '除尘风机', 'class': 'type-on' }, { 'id': 6, 'label': '喷淋水泵1', 'class': 'type-on' }, { 'id': 7, 'label': '喷淋水泵2', 'class': 'type-on' }, { 'id': 8, 'label': '喷淋水泵3', 'class': 'type-on' }, { 'id': 9, 'label': '喷淋水泵4', 'class': 'type-on' }], 'edges': [[3, 5], [4, 5], [5, 6], [5, 7], [5, 8], [5, 9]], 'errLine': [], 'errNodes': [] }

    companyGraphs.dsq164 = {
        nodes: [
            { id: 0, label: '辽宁青花耐火材料股份有限公司', class: 'type-on' },
            { id: 1, label: '电熔镁3(一车间)', class: 'type-on' },
            { id: 2, label: '电熔镁4(一车间)', class: 'type-on' },
            { id: 3, label: '电熔镁5(一车间)', class: 'type-on' },
            { id: 4, label: '电熔镁6(一车间)', class: 'type-on' },
            { id: 5, label: '电熔镁7(一车间)', class: 'type-on' },
            { id: 6, label: '电熔镁8(一车间)', class: 'type-on' },
            { id: 7, label: '电熔镁1(二车间)', class: 'type-on' },
            { id: 8, label: '电熔镁2(二车间)', class: 'type-on' },
            { id: 9, label: '电熔镁3(二车间)', class: 'type-on' },
            { id: 10, label: '电熔镁4(二车间)', class: 'type-on' },
            { id: 11, label: '隧道窑1(一厂)主', class: 'type-on' },
            { id: 12, label: '隧道窑1(一厂)备', class: 'type-on' },
            { id: 13, label: '隧道窑2(一厂)主', class: 'type-on' },
            { id: 14, label: '隧道窑2(一厂)备', class: 'type-on' },
            { id: 15, label: '隧道窑1(二厂)', class: 'type-on' },
            { id: 16, label: '隧道窑2(二厂)', class: 'type-on' },
            { id: 17, label: '隧道窑(二厂1、2备)', class: 'type-on' },
            { id: 18, label: '隧道窑1(三厂)主', class: 'type-on' },
            { id: 19, label: '隧道窑1(三厂)备', class: 'type-on' },
            { id: 20, label: '隧道窑2(三厂)主', class: 'type-on' },
            { id: 21, label: '隧道窑2(三厂)备', class: 'type-on' },
            { id: 22, label: '高纯竖窑1', class: 'type-on' },
            { id: 23, label: '高纯竖窑2', class: 'type-on' },
            { id: 24, label: '高纯竖窑1、2备', class: 'type-on' },
            { id: 25, label: '除尘风机2(一车间)', class: 'type-on' },
            { id: 26, label: '除尘风机3(一车间)', class: 'type-on' },
            { id: 27, label: '除尘风机4(一车间)', class: 'type-on' },
            { id: 28, label: '除尘风机1(二车间)', class: 'type-on' },
            { id: 29, label: '除尘风机2(二车间)', class: 'type-on' },
            { id: 30, label: '除尘风机3(二车间)', class: 'type-on' },
            { id: 31, label: '除尘风机4(二车间)', class: 'type-on' },
            { id: 32, label: '除尘风机(一厂)', class: 'type-on' },
            { id: 33, label: '除尘风机(二厂)', class: 'type-on' },
            { id: 34, label: '除尘风机(三厂)', class: 'type-on' },
            { id: 35, label: '除尘风机(高纯厂)', class: 'type-on' },
            { id: 36, label: '循环水泵(一厂)主', class: 'type-on' },
            { id: 37, label: '循环水泵(一厂)备', class: 'type-on' },
            { id: 38, label: '循环水泵(二厂)主', class: 'type-on' },
            { id: 39, label: '循环水泵(二厂)备', class: 'type-on' },
            { id: 40, label: '循环水泵(三厂)主', class: 'type-on' },
            { id: 41, label: '循环水泵(三厂)备', class: 'type-on' },
            { id: 42, label: '循环水泵(高纯厂)主', class: 'type-on' },
            { id: 43, label: '循环水泵(高纯厂)备', class: 'type-on' },
            { id: 44, label: '电熔镁一车间', class: 'type-on' },
            { id: 45, label: '电熔镁二车间', class: 'type-on' },
            { id: 46, label: '镁砖一厂', class: 'type-on' },
            { id: 47, label: '镁砖二厂', class: 'type-on' },
            { id: 48, label: '镁砖三厂', class: 'type-on' },
            { id: 49, label: '高纯厂', class: 'type-on' }
        ],
        edges: [
            [0, 1],
            [0, 2],
            [0, 3],
            [0, 4],
            [0, 5],
            [0, 6],
            [0, 7],
            [0, 8],
            [0, 9],
            [0, 10],
            [0, 11],
            [0, 12],
            [0, 13],
            [0, 14],
            [0, 15],
            [0, 16],
            [0, 17],
            [0, 18],
            [0, 19],
            [0, 20],
            [0, 21],
            [0, 22],
            [0, 23],
            [0, 24],
            [1, 25],
            [2, 25],
            [3, 26],
            [4, 26],
            [5, 27],
            [6, 27],
            [7, 28],
            [8, 29],
            [9, 30],
            [10, 31],
            [11, 32],
            [12, 32],
            [13, 32],
            [14, 32],
            [15, 33],
            [16, 33],
            [17, 33],
            [18, 34],
            [19, 34],
            [20, 34],
            [21, 34],
            [22, 35],
            [23, 35],
            [24, 35],
            [32, 36],
            [32, 37],
            [33, 38],
            [33, 39],
            [34, 40],
            [34, 41],
            [35, 42],
            [35, 43],
            [25, 44],
            [26, 44],
            [27, 44],
            [28, 45],
            [29, 45],
            [30, 45],
            [31, 45],
            [36, 46],
            [37, 46],
            [38, 47],
            [39, 47],
            [40, 48],
            [41, 48],
            [42, 49],
            [43, 49]
        ],
        errLine: [
        ],
        errNodes: [
        ]
    }

    companyGraphs.dsq165 = { 'nodes': [{ 'id': 1, 'label': '辽宁青花耐火材料股份有限公司（官屯）', 'class': 'type-on' }, { 'id': 2, 'label': '轻烧窑1-10', 'class': 'type-on' }, { 'id': 3, 'label': '轻烧窑11-20', 'class': 'type-on' }, { 'id': 4, 'label': '轻烧窑1-20(备)', 'class': 'type-on' }, { 'id': 5, 'label': '除尘风机5', 'class': 'type-on' }, { 'id': 6, 'label': '除尘风机6', 'class': 'type-on' }, { 'id': 7, 'label': '除尘风机4', 'class': 'type-on' }, { 'id': 8, 'label': '除尘风机3', 'class': 'type-on' }, { 'id': 9, 'label': '中档窑1', 'class': 'type-on' }, { 'id': 10, 'label': '除尘风机(中档窑)', 'class': 'type-on' }, { 'id': 11, 'label': '喷淋水泵1', 'class': 'type-on' }, { 'id': 12, 'label': '喷淋水泵2', 'class': 'type-on' }, { 'id': 13, 'label': '中档窑2', 'class': 'type-on' }, { 'id': 14, 'label': '轻烧窑(方窑3)', 'class': 'type-on' }, { 'id': 15, 'label': '轻烧窑(方窑4)', 'class': 'type-on' }, { 'id': 16, 'label': '除尘风机1', 'class': 'type-on' }, { 'id': 17, 'label': '除尘风机2', 'class': 'type-on' }], 'edges': [[2, 5], [2, 6], [3, 7], [3, 8], [9, 10], [13, 10], [10, 11], [10, 12], [14, 16], [15, 17]], 'errLine': [], 'errNodes': [] }

    companyGraphs.dsq166 = {
        nodes: [
            { id: 0, label: '大石桥市红利镁制品有限公司', class: 'type-on' },
            { id: 1, label: '轻烧窑1', class: 'type-on' },
            { id: 2, label: '轻烧窑2', class: 'type-on' },
            { id: 3, label: '轻烧窑3', class: 'type-on' },
            { id: 4, label: '轻烧窑4', class: 'type-on' },
            { id: 5, label: '除尘风机', class: 'type-on' },
            { id: 6, label: '喷淋水泵', class: 'type-on' },
            { id: 7, label: '监控单元1', class: 'type-on' }
        ],
        edges: [
            [0, 1],
            [0, 2],
            [0, 3],
            [0, 4],
            [1, 5],
            [2, 5],
            [3, 5],
            [4, 5],
            [5, 6],
            [6, 7]
        ],
        errLine: [
        ],
        errNodes: [
        ]
    }

    companyGraphs.dsq167 = {
        nodes: [
            { id: 0, label: '营口弘盛耐材有限公司', class: 'type-on' },
            { id: 1, label: '重烧竖窑1', class: 'type-on' },
            { id: 2, label: '重烧竖窑2', class: 'type-on' },
            { id: 3, label: '除尘风机', class: 'type-on' },
            { id: 4, label: '喷淋水泵', class: 'type-on' },
            { id: 5, label: '监控单元1', class: 'type-on' }
        ],
        edges: [
            [0, 1],
            [0, 2],
            [1, 3],
            [2, 3],
            [3, 4],
            [4, 5]
        ],
        errLine: [
        ],
        errNodes: [
        ]
    }

    companyGraphs.dsq168 = {
        nodes: [
            { id: 0, label: '大石桥南楼永胜建材厂', class: 'type-on' },
            { id: 1, label: '轻烧窑1', class: 'type-on' },
            { id: 2, label: '轻烧窑2', class: 'type-on' },
            { id: 3, label: '轻烧窑3', class: 'type-on' },
            { id: 4, label: '轻烧窑4', class: 'type-on' },
            { id: 5, label: '轻烧窑5', class: 'type-on' },
            { id: 6, label: '轻烧窑6', class: 'type-on' },
            { id: 7, label: '除尘风机1', class: 'type-on' },
            { id: 8, label: '除尘风机2', class: 'type-on' },
            { id: 9, label: '脱硫塔', class: 'type-on' },
            { id: 10, label: '脱硫水泵1', class: 'type-on' },
            { id: 11, label: '脱硫水泵2', class: 'type-on' },
            { id: 12, label: '脱硫水泵3', class: 'type-on' },
            { id: 13, label: '脱硝塔', class: 'type-on' },
            { id: 14, label: '脱硝水泵1', class: 'type-on' },
            { id: 15, label: '脱硝水泵2', class: 'type-on' },
            { id: 16, label: '脱硝水泵3', class: 'type-on' },
            { id: 17, label: '轻烧车间', class: 'type-on' }
        ],
        edges: [
            [0, 1],
            [0, 2],
            [0, 3],
            [0, 4],
            [0, 5],
            [0, 6],
            [1, 8],
            [2, 8],
            [3, 8],
            [4, 8],
            [5, 7],
            [6, 7],
            [7, 9],
            [8, 9],
            [9, 10],
            [9, 11],
            [9, 12],
            [10, 13],
            [11, 13],
            [12, 13],
            [13, 14],
            [13, 15],
            [13, 16],
            [14, 17],
            [15, 17],
            [16, 17]
        ],
        errLine: [
        ],
        errNodes: [
        ]
    }

    companyGraphs.dsq169 = {
        nodes: [
            { id: 0, label: '大石桥市镁都矿产品有限公司', class: 'type-on' },
            { id: 1, label: '轻烧窑1', class: 'type-on' },
            { id: 2, label: '轻烧窑1', class: 'type-on' },
            { id: 3, label: '轻烧窑1', class: 'type-on' },
            { id: 4, label: '轻烧窑4', class: 'type-on' },
            { id: 5, label: '除尘风机', class: 'type-on' },
            { id: 6, label: '喷淋水泵', class: 'type-on' },
            { id: 7, label: '监控单元1', class: 'type-on' }
        ],
        edges: [
            [0, 1],
            [0, 2],
            [0, 3],
            [0, 4],
            [1, 5],
            [2, 5],
            [3, 5],
            [4, 5],
            [5, 6],
            [6, 7]
        ],
        errLine: [
        ],
        errNodes: [
        ]
    }

    companyGraphs.dsq170 = {
        nodes: [
            { id: 0, label: '营口赞丰实业有限公司', class: 'type-on' },
            { id: 1, label: '重烧竖窑12', class: 'type-on' },
            { id: 2, label: '除尘风机', class: 'type-on' },
            { id: 3, label: '喷淋水泵', class: 'type-on' },
            { id: 4, label: '监控单元1', class: 'type-on' }
        ],
        edges: [
            [0, 1],
            [1, 2],
            [2, 3],
            [3, 4]
        ],
        errLine: [
        ],
        errNodes: [
        ]
    }

    companyGraphs.dsq171 =
        { 'nodes': [{ 'id': 0, 'label': '营口市万腾耐火材料有限公司', 'class': 'type-on' }, { 'id': 1, 'label': '电熔镁1', 'class': 'type-on' }, { 'id': 2, 'label': '电熔镁2', 'class': 'type-on' }, { 'id': 3, 'label': '电熔镁3', 'class': 'type-on' }, { 'id': 4, 'label': '电熔镁4', 'class': 'type-on' }, { 'id': 5, 'label': '除尘风机1', 'class': 'type-on' }, { 'id': 6, 'label': '除尘风机2', 'class': 'type-on' }, { 'id': 7, 'label': '除尘风机3', 'class': 'type-on' }, { 'id': 8, 'label': '除尘风机11 ', 'class': 'type-on' }, { 'id': 9, 'label': '除尘风机12', 'class': 'type-on' }, { 'id': 10, 'label': '除尘风机10', 'class': 'type-on' }, { 'id': 11, 'label': '除尘风机9', 'class': 'type-on' }, { 'id': 12, 'label': '除尘风机8', 'class': 'type-on' }, { 'id': 13, 'label': '除尘风机5', 'class': 'type-on' }, { 'id': 14, 'label': '除尘风机4', 'class': 'type-on' }, { 'id': 15, 'label': '除尘风机6', 'class': 'type-on' }, { 'id': 16, 'label': '除尘风机7', 'class': 'type-on' }], 'edges': [[1, 5], [1, 6], [1, 7], [2, 14], [2, 13], [2, 15], [3, 16], [3, 12], [3, 11], [4, 8], [4, 9], [4, 10]], 'errLine': [], 'errNodes': [] }
    companyGraphs.dsq172 = {
        nodes: [
            { id: 0, label: '营口南楼耐火材料有限公司', class: 'type-on' },
            { id: 1, label: '重烧竖窑1', class: 'type-on' },
            { id: 2, label: '重烧竖窑2', class: 'type-on' },
            { id: 3, label: '重烧竖窑3', class: 'type-on' },
            { id: 4, label: '除尘风机1', class: 'type-on' },
            { id: 5, label: '除尘风机2', class: 'type-on' },
            { id: 6, label: '除尘风机3', class: 'type-on' },
            { id: 7, label: '脱硫水泵1', class: 'type-on' },
            { id: 8, label: '脱硫水泵2', class: 'type-on' },
            { id: 9, label: '监控单元1', class: 'type-on' }
        ],
        edges: [
            [0, 1],
            [0, 2],
            [0, 3],
            [1, 4],
            [2, 5],
            [3, 6],
            [4, 7],
            [5, 8],
            [6, 9],
            [7, 9],
            [8, 9]
        ],
        errLine: [
        ],
        errNodes: [
        ]
    }

    companyGraphs.dsq173 = {
        nodes: [
            { id: 0, label: '大石桥市大岭天成耐火材料有限公司', class: 'type-on' },
            { id: 1, label: '重烧竖窑1', class: 'type-on' },
            { id: 2, label: '重烧竖窑2', class: 'type-on' },
            { id: 3, label: '重烧竖窑3', class: 'type-on' },
            { id: 4, label: '除尘风机', class: 'type-on' },
            { id: 5, label: '脱硝塔', class: 'type-on' },
            { id: 6, label: '脱硝水泵1', class: 'type-on' },
            { id: 7, label: '脱硝水泵2', class: 'type-on' },
            { id: 8, label: '脱硝水泵3', class: 'type-on' },
            { id: 9, label: '脱硫塔', class: 'type-on' },
            { id: 10, label: '脱硫水泵1', class: 'type-on' },
            { id: 11, label: '脱硫水泵2', class: 'type-on' },
            { id: 12, label: '脱硫水泵3', class: 'type-on' },
            { id: 13, label: '监控单元1', class: 'type-on' }
        ],
        edges: [
            [0, 1],
            [0, 2],
            [0, 3],
            [1, 4],
            [2, 4],
            [3, 4],
            [4, 5],
            [5, 6],
            [5, 7],
            [5, 8],
            [6, 9],
            [7, 9],
            [8, 9],
            [9, 10],
            [9, 11],
            [9, 12],
            [10, 13],
            [11, 13],
            [12, 13]
        ],
        errLine: [
        ],
        errNodes: [
        ]
    }

    companyGraphs.dsq174 = {
        nodes: [
            { id: 0, label: '大石桥市天岩耐火材料有限公司', class: 'type-on' },
            { id: 1, label: '重烧竖窑', class: 'type-on' },
            { id: 2, label: '除尘风机', class: 'type-on' },
            { id: 3, label: '脱硝塔', class: 'type-on' },
            { id: 4, label: '脱硝水泵2', class: 'type-on' },
            { id: 5, label: '脱硝水泵3', class: 'type-on' },
            { id: 6, label: '脱硝水泵4', class: 'type-on' },
            { id: 7, label: '脱硫塔', class: 'type-on' },
            { id: 8, label: '脱硫水泵5', class: 'type-on' },
            { id: 9, label: '脱硫水泵6', class: 'type-on' },
            { id: 10, label: '监控单元1', class: 'type-on' }
        ],
        edges: [
            [0, 1],
            [1, 2],
            [2, 3],
            [3, 4],
            [3, 5],
            [3, 6],
            [4, 7],
            [5, 7],
            [6, 7],
            [7, 8],
            [7, 9],
            [8, 10],
            [9, 10]
        ],
        errLine: [
        ],
        errNodes: [
        ]
    }

    companyGraphs.dsq175 = {
        nodes: [
            { id: 0, label: '大石桥市鑫博化工有限责任公司', class: 'type-on' },
            { id: 1, label: '回转窑', class: 'type-on' },
            { id: 2, label: '除尘风机', class: 'type-on' },
            { id: 3, label: '监控单元1', class: 'type-on' }
        ],
        edges: [
            [0, 1],
            [1, 2],
            [2, 3]
        ],
        errLine: [
        ],
        errNodes: [
        ]
    }

    companyGraphs.dsq176 =
        { 'nodes': [{ 'id': 0, 'label': '大石桥市永益耐火材料有限公司', 'class': 'type-on' }, { 'id': 1, 'label': '电熔炉3', 'class': 'type-on' }, { 'id': 2, 'label': '电熔炉4', 'class': 'type-on' }, { 'id': 3, 'label': '除尘风机', 'class': 'type-on' }], 'edges': [[1, 3], [2, 3]], 'errLine': [], 'errNodes': [] }

    companyGraphs.dsq177 = {
        nodes: [
            { id: 0, label: '营口仁威矿产有限公司', class: 'type-on' },
            { id: 1, label: '回转窑(北)', class: 'type-on' },
            { id: 2, label: '回转窑(南)', class: 'type-on' },
            { id: 3, label: '脱硝水泵1', class: 'type-on' },
            { id: 4, label: '脱硝水泵2', class: 'type-on' },
            { id: 5, label: '脱硝水泵3', class: 'type-on' },
            { id: 6, label: '除尘风机(北)', class: 'type-on' },
            { id: 7, label: '除尘风机(南)', class: 'type-on' },
            { id: 8, label: '脱硫塔', class: 'type-on' },
            { id: 9, label: '脱硫水泵1', class: 'type-on' },
            { id: 10, label: '脱硫水泵2', class: 'type-on' },
            { id: 11, label: '脱硫水泵3', class: 'type-on' },
            { id: 12, label: '监控单元1', class: 'type-on' }
        ],
        edges: [
            [0, 1],
            [0, 2],
            [1, 3],
            [1, 4],
            [2, 4],
            [2, 5],
            [3, 6],
            [4, 6],
            [4, 7],
            [5, 7],
            [6, 8],
            [7, 8],
            [8, 9],
            [8, 10],
            [8, 11],
            [9, 12],
            [10, 12],
            [11, 12]
        ],
        errLine: [
        ],
        errNodes: [
        ]
    }

    companyGraphs.dsq178 = { 'nodes': [{ 'id': 0, 'label': '营口和润耐火材料有限公司', 'class': 'type-on' }, { 'id': 1, 'label': '轻烧窑1', 'class': 'type-on' }, { 'id': 2, 'label': '轻烧窑2', 'class': 'type-on' }, { 'id': 3, 'label': '除尘风机', 'class': 'type-on' }, { 'id': 4, 'label': '脱硫水泵1', 'class': 'type-on' }, { 'id': 5, 'label': '脱硫水泵2', 'class': 'type-on' }], 'edges': [[1, 3], [2, 3], [3, 4], [3, 5]], 'errLine': [], 'errNodes': [] }

    companyGraphs.dsq179 = { 'nodes': [{ 'id': 0, 'label': '营口南楼经济开发区合兴镁质材料有限公司', 'class': 'type-on' }, { 'id': 1, 'label': '重烧竖窑1', 'class': 'type-on' }, { 'id': 2, 'label': '重烧竖窑2', 'class': 'type-on' }, { 'id': 3, 'label': '除尘风机(重烧)', 'class': 'type-on' }, { 'id': 4, 'label': '喷淋水泵1', 'class': 'type-on' }, { 'id': 5, 'label': '喷淋水泵2', 'class': 'type-on' }, { 'id': 6, 'label': '喷淋水泵3', 'class': 'type-on' }, { 'id': 7, 'label': '轻烧窑1', 'class': 'type-on' }, { 'id': 8, 'label': '轻烧窑2', 'class': 'type-on' }, { 'id': 9, 'label': '轻烧窑3', 'class': 'type-on' }, { 'id': 10, 'label': '轻烧窑4', 'class': 'type-on' }, { 'id': 11, 'label': '除尘风机(轻烧)', 'class': 'type-on' }, { 'id': 12, 'label': '脱硫水泵1', 'class': 'type-on' }, { 'id': 13, 'label': '脱硫水泵2', 'class': 'type-on' }], 'edges': [[1, 3], [2, 3], [3, 4], [3, 5], [3, 6], [7, 11], [8, 11], [9, 11], [10, 11], [11, 12], [11, 13]], 'errLine': [], 'errNodes': [] }

    companyGraphs.dsq180 = { 'nodes': [{ 'id': 0, 'label': '大石桥东兴耐火材料有限公司', 'class': 'type-on' }, { 'id': 1, 'label': '电熔镁1', 'class': 'type-on' }, { 'id': 2, 'label': '电熔镁2', 'class': 'type-on' }, { 'id': 3, 'label': '电熔镁3', 'class': 'type-on' }, { 'id': 4, 'label': '电熔镁4', 'class': 'type-on' }, { 'id': 5, 'label': '电熔镁5', 'class': 'type-on' }, { 'id': 6, 'label': '电熔镁6', 'class': 'type-on' }, { 'id': 7, 'label': '电熔镁7', 'class': 'type-on' }, { 'id': 8, 'label': '除尘风机1', 'class': 'type-on' }, { 'id': 9, 'label': '除尘风机2', 'class': 'type-on' }, { 'id': 10, 'label': '除尘风机3', 'class': 'type-on' }, { 'id': 11, 'label': '除尘风机4', 'class': 'type-on' }, { 'id': 12, 'label': '除尘风机5', 'class': 'type-on' }, { 'id': 13, 'label': '除尘风机6', 'class': 'type-on' }], 'edges': [[1, 8], [2, 9], [3, 10], [4, 11], [5, 12], [6, 13], [7, 13]], 'errLine': [], 'errNodes': [] }

    companyGraphs.dsq181 = {
        nodes: [
            { id: 0, label: '大石桥市东润耐火材料有限公司', class: 'type-on' },
            { id: 1, label: '电熔镁1', class: 'type-on' },
            { id: 2, label: '电熔镁2', class: 'type-on' },
            { id: 3, label: '电熔镁3', class: 'type-on' },
            { id: 4, label: '电熔镁4', class: 'type-on' },
            { id: 5, label: '除尘风机1', class: 'type-on' },
            { id: 6, label: '除尘风机2', class: 'type-on' },
            { id: 7, label: '除尘风机3', class: 'type-on' },
            { id: 8, label: '监控单元1', class: 'type-on' }
        ],
        edges: [
            [0, 1],
            [0, 2],
            [0, 3],
            [0, 4],
            [1, 5],
            [2, 5],
            [3, 6],
            [4, 7],
            [5, 8],
            [6, 8],
            [7, 8]
        ],
        errLine: [
        ],
        errNodes: [
        ]
    }

    companyGraphs.dsq182 = {
        nodes: [
            { id: 0, label: '营口丰杰实业发展有限公司', class: 'type-on' },
            { id: 1, label: '轻烧窑1(轻烧一用)', class: 'type-on' },
            { id: 1, label: '轻烧窑2(轻烧一用)', class: 'type-on' },
            { id: 1, label: '轻烧窑1A(轻烧二用)', class: 'type-on' },
            { id: 1, label: '轻烧窑1B(轻烧二用)', class: 'type-on' },
            { id: 1, label: '轻烧窑2A(轻烧二用)', class: 'type-on' },
            { id: 1, label: '轻烧窑2B(轻烧二用)', class: 'type-on' },
            { id: 1, label: '重烧竖窑1', class: 'type-on' },
            { id: 1, label: '重烧竖窑2', class: 'type-on' },
            { id: 1, label: '重烧竖窑1(重烧二用)', class: 'type-on' },
            { id: 1, label: '重烧竖窑2(重烧二用)', class: 'type-on' },
            { id: 2, label: '除尘风机(轻烧一用)', class: 'type-on' },
            { id: 2, label: '除尘风机(轻烧二用)', class: 'type-on' },
            { id: 2, label: '除尘风机', class: 'type-on' },
            { id: 3, label: '监控单元1', class: 'type-on' }
        ],
        edges: [
            [0, 1],
            [1, 2],
            [2, 3]
        ],
        errLine: [
        ],
        errNodes: [
        ]
    }

    companyGraphs.dsq183 = {
        nodes: [
            { id: 0, label: '辽宁帝诺镁业集团有限公司', class: 'type-on' },
            { id: 1, label: '电熔炉3', class: 'type-on' },
            { id: 2, label: '电熔炉4', class: 'type-on' },
            { id: 3, label: '除尘风机', class: 'type-on' },
            { id: 4, label: '监控单元1', class: 'type-on' }
        ],
        edges: [
            [0, 1],
            [0, 2],
            [1, 3],
            [2, 3],
            [3, 4]
        ],
        errLine: [
        ],
        errNodes: [
        ]
    }

    companyGraphs.dsq184 = {
        nodes: [
            { id: 0, label: '大石桥市飞达菱镁材料有限公司', class: 'type-on' },
            { id: 1, label: '轻烧窑', class: 'type-on' },
            { id: 2, label: '除尘风机', class: 'type-on' },
            { id: 3, label: '脱硫水泵', class: 'type-on' },
            { id: 4, label: '监控单元1', class: 'type-on' }
        ],
        edges: [
            [0, 1],
            [1, 2],
            [2, 3],
            [3, 4]
        ],
        errLine: [
        ],
        errNodes: [
        ]
    }

    companyGraphs.dsq185 = {
        nodes: [
            { id: 0, label: '营口宏达菱镁制品有限公司', class: 'type-on' },
            { id: 1, label: '轻烧窑1', class: 'type-on' },
            { id: 2, label: '轻烧窑2', class: 'type-on' },
            { id: 3, label: '轻烧窑3', class: 'type-on' },
            { id: 4, label: '轻烧窑4', class: 'type-on' },
            { id: 5, label: '轻烧窑5', class: 'type-on' },
            { id: 6, label: '轻烧窑6', class: 'type-on' },
            { id: 7, label: '除尘风机', class: 'type-on' },
            { id: 8, label: '除尘风机2', class: 'type-on' },
            { id: 9, label: '脱硫水泵1', class: 'type-on' },
            { id: 10, label: '脱硫水泵2', class: 'type-on' },
            { id: 11, label: '脱硫水泵3', class: 'type-on' },
            { id: 12, label: '脱硫水泵4', class: 'type-on' },
            { id: 13, label: '脱硫水泵5', class: 'type-on' },
            { id: 14, label: '脱硫水泵6', class: 'type-on' },
            { id: 15, label: '轻烧车间A,B', class: 'type-on' },
            { id: 16, label: '轻烧车间C,D', class: 'type-on' }
        ],
        edges: [
            [0, 1],
            [0, 2],
            [0, 3],
            [0, 4],
            [0, 5],
            [0, 6],
            [1, 7],
            [2, 7],
            [3, 7],
            [4, 7],
            [5, 8],
            [6, 8],
            [7, 9],
            [7, 10],
            [7, 11],
            [8, 12],
            [8, 13],
            [8, 14],
            [9, 15],
            [10, 15],
            [11, 15],
            [12, 16],
            [13, 16],
            [14, 16]
        ],
        errLine: [
        ],
        errNodes: [
        ]
    }

    companyGraphs.dsq186 = {
        nodes: [
            { id: 0, label: '大石桥市长城耐火材料有限公司', class: 'type-on' },
            { id: 1, label: '重烧竖窑1', class: 'type-on' },
            { id: 2, label: '重烧竖窑2', class: 'type-on' },
            { id: 3, label: '除尘风机', class: 'type-on' },
            { id: 4, label: '喷淋水泵1', class: 'type-on' },
            { id: 5, label: '喷淋水泵2', class: 'type-on' },
            { id: 6, label: '监控单元1', class: 'type-on' }
        ],
        edges: [
            [0, 1],
            [0, 2],
            [1, 3],
            [2, 3],
            [3, 4],
            [3, 5],
            [4, 6],
            [5, 6]
        ],
        errLine: [
        ],
        errNodes: [
        ]
    }

    companyGraphs.dsq187 = {
        nodes: [
            { id: 0, label: '大石桥市富斌建材厂', class: 'type-on' },
            { id: 1, label: '重烧竖窑1', class: 'type-on' },
            { id: 2, label: '重烧竖窑2', class: 'type-on' },
            { id: 3, label: '重烧竖窑3', class: 'type-on' },
            { id: 4, label: '重烧竖窑4', class: 'type-on' },
            { id: 5, label: '除尘风机1', class: 'type-on' },
            { id: 6, label: '除尘风机2', class: 'type-on' },
            { id: 7, label: '循环水池', class: 'type-on' },
            { id: 8, label: '循环水泵1', class: 'type-on' },
            { id: 9, label: '循环水泵2', class: 'type-on' },
            { id: 10, label: '循环水泵3', class: 'type-on' },
            { id: 11, label: '脱硫塔', class: 'type-on' },
            { id: 12, label: '脱硫水泵1', class: 'type-on' },
            { id: 13, label: '脱硫水泵2', class: 'type-on' },
            { id: 14, label: '重烧车间', class: 'type-on' }
        ],
        edges: [
            [0, 1],
            [0, 2],
            [0, 3],
            [0, 4],
            [1, 5],
            [2, 5],
            [3, 6],
            [4, 6],
            [5, 7],
            [6, 7],
            [7, 8],
            [7, 9],
            [7, 10],
            [8, 11],
            [9, 11],
            [10, 11],
            [11, 12],
            [11, 13],
            [12, 14],
            [13, 14]
        ],
        errLine: [
        ],
        errNodes: [
        ]
    }

    companyGraphs.dsq188 = {
        nodes: [
            { id: 0, label: '营口金友耐火材料有限公司', class: 'type-on' },
            { id: 1, label: '重烧竖窑1', class: 'type-on' },
            { id: 2, label: '重烧竖窑2', class: 'type-on' },
            { id: 3, label: '重烧竖窑3', class: 'type-on' },
            { id: 4, label: '重烧竖窑4', class: 'type-on' },
            { id: 5, label: '除尘风机', class: 'type-on' },
            { id: 6, label: '脱硫水泵1', class: 'type-on' },
            { id: 7, label: '脱硫水泵2', class: 'type-on' },
            { id: 8, label: '脱硫水泵3', class: 'type-on' },
            { id: 9, label: '监控单元1', class: 'type-on' }
        ],
        edges: [
            [0, 1],
            [0, 2],
            [0, 3],
            [0, 4],
            [1, 5],
            [2, 5],
            [3, 5],
            [4, 5],
            [5, 6],
            [5, 7],
            [5, 8],
            [6, 9],
            [7, 9],
            [8, 9]
        ],
        errLine: [
        ],
        errNodes: [
        ]
    }

    companyGraphs.dsq189 = { 'nodes': [{ 'id': 0, 'label': '脱硝水泵1', 'class': 'type-on' }, { 'id': 1, 'label': '脱硝水泵2', 'class': 'type-on' }, { 'id': 2, 'label': '脱硫水泵5', 'class': 'type-on' }, { 'id': 3, 'label': '脱硫水泵4', 'class': 'type-on' }, { 'id': 4, 'label': '循环水泵3', 'class': 'type-on' }, { 'id': 5, 'label': '脱硫水泵3', 'class': 'type-on' }, { 'id': 6, 'label': '除尘风机', 'class': 'type-on' }, { 'id': 7, 'label': '重烧竖窑', 'class': 'type-on' }, { 'id': 8, 'label': '脱硫水泵2', 'class': 'type-on' }, { 'id': 9, 'label': '脱硫水泵1', 'class': 'type-on' }, { 'id': 10, 'label': '大石桥市龙盛耐火材料厂', 'class': 'type-on' }], 'edges': [[7, 6], [6, 5], [6, 3], [6, 2], [6, 8], [6, 9], [9, 0], [8, 0], [5, 0], [3, 0], [2, 0], [9, 1], [8, 1], [3, 1], [2, 1], [0, 4], [1, 4]], 'errLine': [], 'errNodes': [] }
    companyGraphs.dsq190 = {
        nodes: [
            { id: 0, label: '营口鑫垚镁业有限公司', class: 'type-on' },
            { id: 1, label: '轻烧窑1', class: 'type-on' },
            { id: 2, label: '轻烧窑2', class: 'type-on' },
            { id: 3, label: '轻烧窑3', class: 'type-on' },
            { id: 4, label: '轻烧窑4', class: 'type-on' },
            { id: 5, label: '除尘风机', class: 'type-on' },
            { id: 6, label: '监控单元1', class: 'type-on' }
        ],
        edges: [
            [0, 1],
            [0, 2],
            [0, 3],
            [0, 4],
            [1, 5],
            [2, 5],
            [3, 5],
            [4, 5],
            [5, 6]
        ],
        errLine: [
        ],
        errNodes: [
        ]
    }
    companyGraphs.dsq191 = { 'nodes': [{ 'id': 0, 'label': '脱硝水泵1', 'class': 'type-on' }, { 'id': 1, 'label': '脱硝水泵2', 'class': 'type-on' }, { 'id': 2, 'label': '重烧竖窑3', 'class': 'type-on' }, { 'id': 3, 'label': '除尘风机', 'class': 'type-on' }, { 'id': 4, 'label': '重烧竖窑2', 'class': 'type-on' }, { 'id': 5, 'label': '重烧竖窑1', 'class': 'type-on' }, { 'id': 6, 'label': '脱硫水泵2', 'class': 'type-on' }, { 'id': 7, 'label': '脱硫水泵1', 'class': 'type-on' }, { 'id': 8, 'label': '大石桥市众安耐火材料有限责任公司(分厂)', 'class': 'type-on' }], 'edges': [[2, 3], [4, 3], [5, 3], [3, 0], [3, 7], [3, 6], [3, 1], [8, 2], [8, 4], [8, 5]], 'errLine': [], 'errNodes': [] }

    companyGraphs.dsq193 = { 'nodes': [{ 'id': 0, 'label': '轻烧窑3', 'class': 'type-on' }, { 'id': 1, 'label': '轻烧窑2', 'class': 'type-on' }, { 'id': 2, 'label': '轻烧窑1', 'class': 'type-on' }, { 'id': 3, 'label': '除尘风机(重烧)', 'class': 'type-on' }, { 'id': 4, 'label': '除尘风机', 'class': 'type-on' }, { 'id': 5, 'label': '重烧竖窑', 'class': 'type-on' }, { 'id': 6, 'label': '脱硫水泵3', 'class': 'type-on' }, { 'id': 7, 'label': '电熔炉4', 'class': 'type-on' }, { 'id': 8, 'label': '电熔炉2', 'class': 'type-on' }, { 'id': 9, 'label': '电熔炉1', 'class': 'type-on' }, { 'id': 10, 'label': '除尘风机4', 'class': 'type-on' }, { 'id': 11, 'label': '脱硫水泵2', 'class': 'type-on' }, { 'id': 12, 'label': '除尘风机1', 'class': 'type-on' }, { 'id': 13, 'label': '脱硫水泵1', 'class': 'type-on' }, { 'id': 14, 'label': '除尘风机2', 'class': 'type-on' }, { 'id': 15, 'label': '大石桥市琨隆耐火材料有限公司', 'class': 'type-on' }], 'edges': [[0, 4], [1, 4], [2, 4], [4, 13], [4, 11], [9, 12], [7, 10], [8, 14], [5, 3], [3, 6], [3, 11], [3, 13]], 'errLine': [], 'errNodes': [] }

    companyGraphs.dsq194 =
        { 'nodes': [{ 'id': 0, 'label': '电熔镁2', 'class': 'type-on' }, { 'id': 1, 'label': '除尘风机', 'class': 'type-on' }, { 'id': 2, 'label': '电熔镁1', 'class': 'type-on' }, { 'id': 3, 'label': '营口宁丰集团有限公司', 'class': 'type-on' }], 'edges': [[2, 1], [0, 1], [3, 0], [3, 2]], 'errLine': [], 'errNodes': [] }

    companyGraphs.dsq195 =
        { 'nodes': [{ 'id': 0, 'label': '电熔镁', 'class': 'type-on' }, { 'id': 2, 'label': '除尘风机', 'class': 'type-on' }, { 'id': 3, 'label': '大石桥市华海耐火材料有限公司', 'class': 'type-on' }], 'edges': [[3, 0], [0, 2]], 'errLine': [], 'errNodes': [] }

    companyGraphs.dsq198 =
        { 'nodes': [{ 'id': 0, 'label': '破碎电机', 'class': 'type-on' }, { 'id': 1, 'label': '除尘风机', 'class': 'type-on' }, { 'id': 2, 'label': '大石桥市百寨明兴耐火材料有限公司', 'class': 'type-on' }], 'edges': [[2, 0], [0, 1]], 'errLine': [], 'errNodes': [] }

    companyGraphs.dsq199 =
        { 'nodes': [{ 'id': 0, 'label': '破碎1', 'class': 'type-on' }, { 'id': 1, 'label': '破碎2', 'class': 'type-on' }, { 'id': 2, 'label': '除尘风机', 'class': 'type-on' }, { 'id': 3, 'label': '大石桥市徐家菱镁制品厂', 'class': 'type-on' }], 'edges': [[3, 0], [3, 1], [0, 2], [1, 2]], 'errLine': [], 'errNodes': [] }

    companyGraphs.dsq202 = {
        'nodes': [
            { 'id': 0, 'label': '营口启和粉体工业有限公司', 'class': 'type-on' },
            { 'id': 1, 'label': '除尘风机1', 'class': 'type-on' },
            { 'id': 2, 'label': '雷蒙1', 'class': 'type-on' }
        ],
        'edges': [
            [1, 2]
        ],
        'errLine': [
        ],
        'errNodes': [
        ]
    }

    companyGraphs.dsq203 =
        { 'nodes': [{ 'id': 0, 'label': '大石桥民政苇子屿炉料厂', 'class': 'type-on' }, { 'id': 1, 'label': '破碎电机1', 'class': 'type-on' }, { 'id': 2, 'label': '破碎电机2', 'class': 'type-on' }, { 'id': 3, 'label': '破碎电机', 'class': 'type-on' }, { 'id': 4, 'label': '除尘风机1', 'class': 'type-on' }, { 'id': 5, 'label': '除尘风机2', 'class': 'type-on' }, { 'id': 6, 'label': '雷蒙风机', 'class': 'type-on' }, { 'id': 7, 'label': '除尘风机', 'class': 'type-on' }], 'edges': [[1, 4], [2, 5], [6, 7], [3, 7], [0, 1], [0, 2], [0, 6], [0, 3]], 'errLine': [], 'errNodes': [] }
    companyGraphs.dsq206 = {
        'nodes': [
            { 'id': 0, 'label': '辽宁奥美有限公司', 'class': 'type-on' },
            { 'id': 1, 'label': '破碎1', 'class': 'type-on' },
            { 'id': 2, 'label': '除尘风机1', 'class': 'type-on' },
            { 'id': 3, 'label': '破碎2', 'class': 'type-on' },
            { 'id': 4, 'label': '除尘风机2', 'class': 'type-on' }
        ],
        'edges': [
            [1, 2],
            [3, 4]
        ],
        'errLine': [
        ],
        'errNodes': [
        ]
    }
    companyGraphs.dsq207 = {
        'nodes': [
            { 'id': 0, 'label': '辽宁奥美有限公司', 'class': 'type-on' },
            { 'id': 1, 'label': '电熔炉1#', 'class': 'type-on' },
            { 'id': 2, 'label': '电熔炉2#', 'class': 'type-on' },
            { 'id': 3, 'label': '电熔炉3#', 'class': 'type-on' },
            { 'id': 4, 'label': '电熔炉4#', 'class': 'type-on' },
            { 'id': 5, 'label': '除尘风机1', 'class': 'type-on' },
            { 'id': 6, 'label': '除尘风机2', 'class': 'type-on' }
        ],
        'edges': [
            [1, 5],
            [2, 5],
            [3, 6],
            [4, 6]
        ],
        'errLine': [
        ],
        'errNodes': [
        ]
    }

    companyGraphs.dsq208 =
        { 'nodes': [{ 'id': 0, 'label': '大石桥市兴华镁矿有限公司', 'class': 'type-on' }, { 'id': 1, 'label': '镭蒙主机1', 'class': 'type-on' }, { 'id': 4, 'label': '镭蒙除尘1', 'class': 'type-on' }, { 'id': 9, 'label': '镭蒙除尘2', 'class': 'type-on' }, { 'id': 10, 'label': '镭蒙主机2', 'class': 'type-on' }, { 'id': 11, 'label': '破碎主机1', 'class': 'type-on' }, { 'id': 12, 'label': '破碎主机2', 'class': 'type-on' }, { 'id': 13, 'label': '破碎除尘', 'class': 'type-on' }], 'edges': [[0, 1], [1, 4], [0, 11], [10, 9], [11, 13], [0, 10], [0, 12], [12, 13]], 'errLine': [], 'errNodes': [] }
    companyGraphs.dsq209 =
        { 'nodes': [{ 'id': 3, 'label': '破碎除尘', 'class': 'type-on' }, { 'id': 4, 'label': '破碎主机', 'class': 'type-on' }, { 'id': 5, 'label': '大石桥市明源耐火材料厂', 'class': 'type-on' }], 'edges': [[4, 3], [5, 4]], 'errLine': [], 'errNodes': [] }

    companyGraphs.dsq210 =
        { 'nodes': [{ 'id': 0, 'label': '大石桥市永安特种耐火材料有限公司', 'class': 'type-on' }, { 'id': 1, 'label': '破碎除尘', 'class': 'type-on' }, { 'id': 2, 'label': '破碎主机', 'class': 'type-on' }], 'edges': [[0, 2], [2, 1]], 'errLine': [], 'errNodes': [] }

    companyGraphs.dsq214 =
        { 'nodes': [{ 'id': 0, 'label': '镭蒙除尘', 'class': 'type-on' }, { 'id': 1, 'label': '镭蒙主机', 'class': 'type-on' }, { 'id': 2, 'label': '破碎除尘', 'class': 'type-on' }, { 'id': 3, 'label': '破碎', 'class': 'type-on' }, { 'id': 4, 'label': '营口瑞谷耐火材料有限公司', 'class': 'type-on' }], 'edges': [[1, 0], [3, 2]], 'errLine': [], 'errNodes': [] }

    companyGraphs.dsq217 =
        { 'nodes': [{ 'id': 0, 'label': '大石桥市永安意达耐火材料厂', 'class': 'type-on' }, { 'id': 1, 'label': '镭蒙除尘', 'class': 'type-on' }, { 'id': 2, 'label': '镭蒙主机', 'class': 'type-on' }, { 'id': 3, 'label': '破碎除尘', 'class': 'type-on' }, { 'id': 4, 'label': '破碎主机', 'class': 'type-on' }], 'edges': [[0, 1], [1, 2], [0, 4], [4, 3]], 'errLine': [], 'errNodes': [] }

    companyGraphs.dsq218 =
        { 'nodes': [{ 'id': 0, 'label': '大石桥市永强耐火材料有限公司', 'class': 'type-on' }, { 'id': 1, 'label': '镭蒙除尘', 'class': 'type-on' }, { 'id': 2, 'label': '镭蒙主机', 'class': 'type-on' }, { 'id': 3, 'label': '破碎除尘', 'class': 'type-on' }, { 'id': 4, 'label': '破碎主机', 'class': 'type-on' }], 'edges': [[0, 2], [2, 1], [0, 3], [3, 4]], 'errLine': [], 'errNodes': [] }

    companyGraphs.dsq219 =
        { 'nodes': [{ 'id': 0, 'label': '镭蒙除尘', 'class': 'type-on' }, { 'id': 1, 'label': '镭蒙主机', 'class': 'type-on' }, { 'id': 2, 'label': '破碎除尘', 'class': 'type-on' }, { 'id': 3, 'label': '破碎主机', 'class': 'type-on' }, { 'id': 4, 'label': '营口德丰耐火材料有限公司', 'class': 'type-on' }], 'edges': [[4, 1], [1, 0], [3, 2], [4, 3]], 'errLine': [], 'errNodes': [] }

    companyGraphs.dsq220 =
        { 'nodes': [{ 'id': 0, 'label': '破碎主机', 'class': 'type-on' }, { 'id': 1, 'label': '破碎除尘风机', 'class': 'type-on' }, { 'id': 2, 'label': '大石桥市三山耐火材料厂', 'class': 'type-on' }], 'edges': [[2, 0], [0, 1]], 'errLine': [], 'errNodes': [] }

    companyGraphs.dsq221 =
        { 'nodes': [{ 'id': 0, 'label': '镭蒙除尘', 'class': 'type-on' }, { 'id': 1, 'label': '镭蒙主机', 'class': 'type-on' }, { 'id': 2, 'label': '破碎除尘', 'class': 'type-on' }, { 'id': 3, 'label': '破碎主机1', 'class': 'type-on' }, { 'id': 4, 'label': '破碎主机2', 'class': 'type-on' }, { 'id': 5, 'label': '破碎除尘2', 'class': 'type-on' }, { 'id': 6, 'label': '破碎主机', 'class': 'type-on' }, { 'id': 7, 'label': '破碎除尘1', 'class': 'type-on' }, { 'id': 8, 'label': '大石桥市冠诚耐火材料有限公司', 'class': 'type-on' }], 'edges': [[1, 0], [6, 2], [3, 7], [4, 5], [8, 1], [8, 6], [8, 4], [8, 3]], 'errLine': [], 'errNodes': [] }

    companyGraphs.dsq222 =
        { 'nodes': [{ 'id': 0, 'label': '破碎除尘', 'class': 'type-on' }, { 'id': 1, 'label': '破碎主机', 'class': 'type-on' }, { 'id': 2, 'label': '大石桥市永升耐火材料有限公司', 'class': 'type-on' }], 'edges': [[2, 1], [1, 0]], 'errLine': [], 'errNodes': [] }

    // 盖州企业
    companyGraphs.gz001 = {
        nodes: [
            { id: 0, label: '盖州市宏兴耐火材料有限公司', class: 'type-on' },
            { id: 1, label: '电熔镁1', class: 'type-on' },
            { id: 2, label: '电熔镁2', class: 'type-on' },
            { id: 3, label: '电熔镁3', class: 'type-on' },
            { id: 4, label: '电熔镁4', class: 'type-on' },
            { id: 5, label: '电熔镁5', class: 'type-on' },
            { id: 6, label: '电熔镁6', class: 'type-on' },
            { id: 7, label: '电熔镁7', class: 'type-on' },
            { id: 8, label: '电熔镁8', class: 'type-on' },
            { id: 9, label: '除尘风机1', class: 'type-on' },
            { id: 10, label: '除尘风机2', class: 'type-on' },
            { id: 11, label: '除尘风机3', class: 'type-on' },
            { id: 12, label: '除尘风机4', class: 'type-on' },
            { id: 13, label: '监控单元1', class: 'type-on' }
        ],
        edges: [
            [0, 1],
            [0, 2],
            [0, 3],
            [0, 4],
            [0, 5],
            [0, 6],
            [0, 7],
            [0, 8],
            [1, 9],
            [2, 9],
            [3, 10],
            [4, 10],
            [5, 11],
            [6, 11],
            [7, 12],
            [8, 12],
            [9, 13],
            [10, 13],
            [11, 13],
            [12, 13]
        ],
        errLine: [
        ],
        errNodes: [
        ]
    }

    companyGraphs.gz002 = {
        nodes: [
            { id: 0, label: '盖州市永和耐火材料厂', class: 'type-on' },
            { id: 1, label: '电熔镁1', class: 'type-on' },
            { id: 2, label: '电熔镁2', class: 'type-on' },
            { id: 3, label: '电熔镁3', class: 'type-on' },
            { id: 4, label: '除尘风机1', class: 'type-on' },
            { id: 5, label: '除尘风机2', class: 'type-on' },
            { id: 6, label: '除尘风机3', class: 'type-on' },
            { id: 7, label: '监控单元1', class: 'type-on' }
        ],
        edges: [
            [0, 1],
            [0, 2],
            [0, 3],
            [1, 4],
            [2, 5],
            [3, 6],
            [4, 7],
            [5, 7],
            [6, 7]
        ],
        errLine: [
        ],
        errNodes: [
        ]
    }

    companyGraphs.gz003 = {
        nodes: [
            { id: 0, label: '盖州市新宏兴合成金属材料有限公司', class: 'type-on' },
            { id: 1, label: '电熔镁1', class: 'type-on' },
            { id: 2, label: '电熔镁2', class: 'type-on' },
            { id: 3, label: '电熔镁3', class: 'type-on' },
            { id: 4, label: '电熔镁4', class: 'type-on' },
            { id: 5, label: '除尘风机1', class: 'type-on' },
            { id: 6, label: '除尘风机2', class: 'type-on' },
            { id: 7, label: '监控单元1', class: 'type-on' }
        ],
        edges: [
            [0, 1],
            [0, 2],
            [0, 3],
            [0, 4],
            [1, 5],
            [2, 5],
            [3, 6],
            [4, 6],
            [5, 7],
            [6, 7]
        ],
        errLine: [
        ],
        errNodes: [
        ]
    }

    companyGraphs.gz004 = {
        nodes: [
            { id: 0, label: '盖州市金山耐火材料有限公司', class: 'type-on' },
            { id: 1, label: '电熔炉1', class: 'type-on' },
            { id: 2, label: '电熔炉2', class: 'type-on' },
            { id: 3, label: '除尘风机', class: 'type-on' },
            { id: 4, label: '监控单元1', class: 'type-on' }
        ],
        edges: [
            [0, 1],
            [0, 2],
            [1, 3],
            [2, 3],
            [3, 4]
        ],
        errLine: [
        ],
        errNodes: [
        ]
    }

    companyGraphs.gz005 = {
        nodes: [
            { id: 0, label: '盖州市顺达耐火材料有限公司', class: 'type-on' },
            { id: 1, label: '电熔炉1', class: 'type-on' },
            { id: 2, label: '电熔炉2', class: 'type-on' },
            { id: 3, label: '除尘风机', class: 'type-on' },
            { id: 4, label: '监控单元1', class: 'type-on' }
        ],
        edges: [
            [0, 1],
            [0, 2],
            [1, 3],
            [2, 3],
            [3, 4]
        ],
        errLine: [
        ],
        errNodes: [
        ]
    }

    companyGraphs.gz006 =
        { 'nodes': [{ 'id': 0, 'label': '除尘风机', 'class': 'type-on' }, { 'id': 1, 'label': '电熔炉', 'class': 'type-on' }, { 'id': 2, 'label': '盖州兴业耐火材料有限公司', 'class': 'type-on' }], 'edges': [[2, 1], [1, 0]], 'errLine': [], 'errNodes': [] }

    companyGraphs.gz007 =
        { 'nodes': [{ 'id': 0, 'label': '除尘风机1', 'class': 'type-on' }, { 'id': 1, 'label': '电熔炉9', 'class': 'type-on' }, { 'id': 2, 'label': '电熔炉8', 'class': 'type-on' }, { 'id': 3, 'label': '电熔炉7', 'class': 'type-on' }, { 'id': 4, 'label': '电熔炉6', 'class': 'type-on' }, { 'id': 5, 'label': '除尘风机2', 'class': 'type-on' }, { 'id': 6, 'label': '辽宁国润金属集团有限公司', 'class': 'type-on' }], 'edges': [[4, 0], [3, 0], [1, 5], [2, 5]], 'errLine': [], 'errNodes': [] }

    // 甘井子
    companyGraphs.gjz001 = {
        nodes: [
            { id: 0, label: '大连三仪动物药品有限公司', class: 'type-on' },
            { id: 1, label: '1号集水池泵', class: 'type-on' },
            { id: 2, label: '冲洗泵', class: 'type-on' },
            { id: 3, label: '初沉1号泵', class: 'type-on' },
            { id: 4, label: '初沉2号泵', class: 'type-on' },
            { id: 5, label: '加药罐', class: 'type-on' },
            { id: 6, label: '加药罐PH一体机', class: 'type-on' },
            { id: 7, label: '气浮刮渣机', class: 'type-on' },
            { id: 8, label: '加减搅拌机', class: 'type-on' },
            { id: 9, label: '加减泵', class: 'type-on' },
            { id: 10, label: 'PAC搅拌机', class: 'type-on' },
            { id: 11, label: 'PAM搅拌机', class: 'type-on' },
            { id: 12, label: '1号气浮溶气泵', class: 'type-on' },
            { id: 13, label: '2号气浮溶气泵', class: 'type-on' },
            { id: 14, label: 'PAC计量泵', class: 'type-on' },
            { id: 15, label: 'PAM计量泵', class: 'type-on' },
            { id: 16, label: '中间水池泵1', class: 'type-on' },
            { id: 17, label: '中间水池泵2', class: 'type-on' },
            { id: 18, label: '中间水池泵3', class: 'type-on' },
            { id: 19, label: 'PH电极1号', class: 'type-on' },
            { id: 20, label: 'PH电极2号', class: 'type-on' },
            { id: 21, label: '风机1号', class: 'type-on' },
            { id: 22, label: '风机2号', class: 'type-on' },
            { id: 23, label: '风机3号', class: 'type-on' },
            { id: 24, label: '污泥回流泵1号', class: 'type-on' },
            { id: 25, label: '污泥回流泵2号', class: 'type-on' },
            { id: 26, label: '二沉池刮泥机', class: 'type-on' },
            { id: 27, label: '离心泵1号', class: 'type-on' },
            { id: 28, label: '二沉池污泥泵', class: 'type-on' },
            { id: 29, label: '离心泵2号', class: 'type-on' },
            { id: 30, label: '浓缩池刮泥', class: 'type-on' },
            { id: 31, label: '污脱加药搅拌机', class: 'type-on' },
            { id: 32, label: '污脱加药', class: 'type-on' },
            { id: 33, label: '集水池', class: 'type-on' },
            { id: 34, label: '初沉池', class: 'type-on' },
            { id: 35, label: '气浮系统', class: 'type-on' },
            { id: 36, label: '中间水池', class: 'type-on' },
            { id: 37, label: '水解池', class: 'type-on' },
            { id: 38, label: '厌氧池', class: 'type-on' },
            { id: 39, label: '好氧池', class: 'type-on' },
            { id: 40, label: '二沉池', class: 'type-on' },
            { id: 41, label: '污泥池', class: 'type-on' },
            { id: 42, label: '污泥脱水', class: 'type-on' },
            { id: 43, label: '出水', class: 'type-on' }
        ],
        edges: [

            [1, 2],
            [2, 3],
            [3, 4],
            [1, 5],
            [1, 6],
            [2, 7],
            [2, 8],
            [2, 9],
            [2, 10],
            [2, 11],
            [3, 12],
            [3, 13],
            [3, 14],
            [4, 15],
            [4, 16]

        ],
        errLine: [
        ],
        errNodes: [
        ]
    }

    companyGraphs.gjz013 = {
        nodes: [
            { id: 0, label: '大连日牵电机有限公司', class: 'type-on' },
            { id: 1, label: '提升泵', class: 'type-on' },
            { id: 2, label: '加药搅拌1号', class: 'type-on' },
            { id: 3, label: '加药搅拌2号', class: 'type-on' },
            { id: 4, label: '加药搅拌3号', class: 'type-on' },
            { id: 5, label: '搅拌机1号', class: 'type-on' },
            { id: 6, label: '搅拌机2号', class: 'type-on' },
            { id: 7, label: '搅拌机3号', class: 'type-on' },
            { id: 8, label: '反应槽', class: 'type-on' },
            { id: 9, label: '污泥泵', class: 'type-on' },
            { id: 10, label: '污泥池', class: 'type-on' },
            { id: 11, label: '过滤泵', class: 'type-on' },
            { id: 12, label: 'PH电极', class: 'type-on' },
            { id: 13, label: '溶解氧电极', class: 'type-on' },
            { id: 14, label: '排水泵', class: 'type-on' },
            { id: 15, label: '原水', class: 'type-on' },
            { id: 16, label: '调节池', class: 'type-on' },
            { id: 17, label: '斜板沉淀池', class: 'type-on' },
            { id: 18, label: '中间水池', class: 'type-on' },
            { id: 19, label: '过滤罐', class: 'type-on' },
            { id: 20, label: 'Ph调整槽', class: 'type-on' },
            { id: 21, label: '放流槽', class: 'type-on' }

        ],
        edges: [
            [1, 16],
            [2, 8],
            [3, 8],
            [4, 8],
            [5, 8],
            [6, 8],
            [7, 8],
            [8, 17],
            [9, 10],
            [10, 17],
            [11, 19],
            [12, 20],
            [13, 20],
            [14, 21],
            [15, 16],
            [16, 17],
            [17, 18],
            [18, 19],
            [19, 20],
            [20, 21]
        ],
        errLine: [],
        errNodes: []
    }

    companyGraphs.gjz020 = {
        nodes: [
            { id: 0, label: '大连华锐重工集团股份有限公司铸钢分公司', class: 'type-on' },
            { id: 1, label: '1级提升泵', class: 'type-on' },
            { id: 2, label: '2级提升泵', class: 'type-on' },
            { id: 3, label: '分机1号', class: 'type-on' },
            { id: 4, label: '分机1号', class: 'type-on' },
            { id: 5, label: 'PH电极', class: 'type-on' },
            { id: 6, label: '溶解氧电极', class: 'type-on' },
            { id: 7, label: '溶药搅拌1号', class: 'type-on' },
            { id: 8, label: '溶药搅拌2号', class: 'type-on' },
            { id: 9, label: '搅拌泵1号', class: 'type-on' },
            { id: 10, label: '搅拌泵2号', class: 'type-on' },
            { id: 11, label: 'PAC加药', class: 'type-on' },
            { id: 12, label: 'PAM加药', class: 'type-on' },
            { id: 13, label: '小风机2号', class: 'type-on' },
            { id: 14, label: '循环小泵1号', class: 'type-on' },
            { id: 15, label: '循环小泵2号', class: 'type-on' },
            { id: 16, label: '原水', class: 'type-on' },
            { id: 17, label: '原水池', class: 'type-on' },
            { id: 18, label: '调节池', class: 'type-on' },
            { id: 19, label: '曝气池', class: 'type-on' },
            { id: 20, label: '一沉淀', class: 'type-on' },
            { id: 21, label: '二沉淀', class: 'type-on' },
            { id: 22, label: '清水池', class: 'type-on' }
        ],
        edges: [

            [1, 17],
            [2, 18],
            [3, 19],
            [4, 19],
            [5, 19],
            [6, 19],
            [7, 11],
            [8, 12],
            [9, 20],
            [10, 20],
            [11, 20],
            [12, 20],
            [13, 20],
            [14, 21],
            [15, 21],
            [16, 17],
            [17, 18],
            [18, 19],
            [19, 20],
            [20, 21],
            [21, 22]
        ],
        errLine: [
        ],
        errNodes: [
        ]
    }

    companyGraphs.gjz026 = {
        nodes: [
            { id: 0, label: '大连麦花食品集团有限公司', class: 'type-on' },
            { id: 1, label: '格栅提升泵', class: 'type-on' },
            { id: 2, label: '提升泵1号', class: 'type-on' },
            { id: 3, label: '提升泵2号', class: 'type-on' },
            { id: 4, label: 'PH电板', class: 'type-on' },
            { id: 5, label: '风机1号', class: 'type-on' },
            { id: 6, label: '风机2号', class: 'type-on' },
            { id: 7, label: '溶解氧电极', class: 'type-on' },
            { id: 8, label: '沉淀池回水泵1号', class: 'type-on' },
            { id: 9, label: '沉淀池回水泵2号', class: 'type-on' },
            { id: 10, label: '污泥回流泵1号', class: 'type-on' },
            { id: 11, label: '污泥回流泵2号', class: 'type-on' },
            { id: 12, label: '原水', class: 'type-on' },
            { id: 13, label: '格栅池', class: 'type-on' },
            { id: 14, label: '隔油池', class: 'type-on' },
            { id: 15, label: '调节池', class: 'type-on' },
            { id: 16, label: '水解酸化池', class: 'type-on' },
            { id: 17, label: '曝气池', class: 'type-on' },
            { id: 18, label: '中间沉淀池', class: 'type-on' },
            { id: 19, label: '过滤罐', class: 'type-on' },
            { id: 20, label: '清水池', class: 'type-on' }

        ],
        edges: [

            [1, 13],
            [2, 15],
            [3, 15],
            [4, 16],
            [5, 17],
            [6, 17],
            [7, 17],
            [8, 18],
            [9, 18],
            [10, 18],
            [11, 18],
            [12, 13],
            [13, 14],
            [14, 15],
            [15, 16],
            [16, 17],
            [17, 18],
            [18, 19],
            [19, 20]
        ],
        errLine: [
        ],
        errNodes: [
        ]
    }

    companyGraphs.gjz027 = {
        nodes: [
            { id: 0, label: '东泰有机废物处理', class: 'type-on' },
            { id: 1, label: '搅拌器1', class: 'type-on' },
            { id: 2, label: '搅拌器2', class: 'type-on' },
            { id: 3, label: '曝气风机1', class: 'type-on' },
            { id: 4, label: '曝气风机2', class: 'type-on' },
            { id: 5, label: 'PH探头', class: 'type-on' },
            { id: 6, label: '溶解氧探头', class: 'type-on' },
            { id: 7, label: '调节池', class: 'type-on' },
            { id: 8, label: '混凝池', class: 'type-on' },
            { id: 9, label: '初沉池', class: 'type-on' },
            { id: 10, label: '斜板沉淀池', class: 'type-on' },
            { id: 11, label: '1号生物池', class: 'type-on' },
            { id: 12, label: '2号生物池', class: 'type-on' },
            { id: 13, label: '4号生物池', class: 'type-on' },
            { id: 14, label: '二沉池', class: 'type-on' },
            { id: 15, label: '出水', class: 'type-on' }

        ],
        edges: [

            [1, 3],
            [2, 10],
            [3, 11],
            [4, 11],
            [5, 11],
            [6, 11],
            [7, 8],
            [8, 9],
            [9, 10],
            [10, 11],
            [11, 12],
            [11, 13],
            [12, 14],
            [14, 15]
        ],
        errLine: [
        ],
        errNodes: [
        ]
    }

    companyGraphs.gjz029 = {
        nodes: [
            { id: 0, label: '大连瑞驰企业集团有限公司', class: 'type-on' },
            { id: 1, label: '提升泵1号', class: 'type-on' },
            { id: 2, label: '提升泵2号', class: 'type-on' },
            { id: 3, label: '气浮泵', class: 'type-on' },
            { id: 4, label: '空压机', class: 'type-on' },
            { id: 5, label: '刮泥机', class: 'type-on' },
            { id: 6, label: '加药泵1号', class: 'type-on' },
            { id: 7, label: '加药泵2号', class: 'type-on' },
            { id: 8, label: '搅拌器', class: 'type-on' },
            { id: 9, label: '风机1号', class: 'type-on' },
            { id: 10, label: '风机2号', class: 'type-on' },
            { id: 11, label: 'PH电极', class: 'type-on' },
            { id: 12, label: '溶解氧电极', class: 'type-on' },
            { id: 13, label: '压滤机', class: 'type-on' },
            { id: 14, label: '污泥池', class: 'type-on' },
            { id: 15, label: '自吸泵1号', class: 'type-on' },
            { id: 16, label: '自吸泵2号', class: 'type-on' },
            { id: 17, label: '自吸泵3号', class: 'type-on' },
            { id: 18, label: '污泥回流泵', class: 'type-on' },
            { id: 19, label: '剩余污泥泵', class: 'type-on' },
            { id: 20, label: '清水泵1号', class: 'type-on' },
            { id: 21, label: '清水泵2号', class: 'type-on' },
            { id: 22, label: '原水', class: 'type-on' },
            { id: 23, label: '调节池', class: 'type-on' },
            { id: 24, label: '气浮系统', class: 'type-on' },
            { id: 25, label: '厌氧池', class: 'type-on' },
            { id: 26, label: '生物接触滤池', class: 'type-on' },
            { id: 27, label: 'MBR池', class: 'type-on' },
            { id: 28, label: '清水池', class: 'type-on' }
        ],
        edges: [

            [1, 23],
            [2, 23],
            [3, 24],
            [4, 24],
            [5, 24],
            [6, 24],
            [7, 24],
            [8, 24],
            [9, 26],
            [10, 26],
            [11, 26],
            [12, 26],
            [13, 14],
            [14, 27],
            [15, 27],
            [16, 27],
            [17, 27],
            [18, 27],
            [19, 27],
            [20, 28],
            [21, 28],
            [22, 23],
            [23, 24],
            [24, 25],
            [25, 26],
            [26, 27],
            [27, 28]

        ],
        errLine: [
        ],
        errNodes: [
        ]
    }

    companyGraphs.gjz030 = {
        nodes: [
            { id: 0, label: '大连天赐食品有限公司', class: 'type-on' },
            { id: 1, label: '提升泵1号', class: 'type-on' },
            { id: 2, label: '提升泵2号', class: 'type-on' },
            { id: 3, label: '气浮泵', class: 'type-on' },
            { id: 4, label: 'PAC加药', class: 'type-on' },
            { id: 5, label: 'PAM加药', class: 'type-on' },
            { id: 6, label: '风机1号', class: 'type-on' },
            { id: 7, label: '风机2号', class: 'type-on' },
            { id: 8, label: 'PH电极', class: 'type-on' },
            { id: 9, label: '溶解氧电极', class: 'type-on' },
            { id: 10, label: '污泥回流泵1号', class: 'type-on' },
            { id: 11, label: '污泥回流泵2号', class: 'type-on' },
            { id: 12, label: '排泥泵1号', class: 'type-on' },
            { id: 13, label: '排泥泵2号', class: 'type-on' },
            { id: 14, label: '污泥池', class: 'type-on' },
            { id: 15, label: '自吸泵1号', class: 'type-on' },
            { id: 16, label: '自吸泵2号', class: 'type-on' },
            { id: 17, label: '原水', class: 'type-on' },
            { id: 18, label: '调节池', class: 'type-on' },
            { id: 19, label: '气浮系统', class: 'type-on' },
            { id: 20, label: '厌氧池', class: 'type-on' },
            { id: 21, label: '好氧池', class: 'type-on' },
            { id: 22, label: '沉淀池', class: 'type-on' },
            { id: 23, label: 'MBR池', class: 'type-on' }
        ],
        edges: [

            [1, 18],
            [2, 18],
            [3, 19],
            [4, 19],
            [5, 19],
            [6, 21],
            [7, 21],
            [8, 21],
            [9, 21],
            [10, 14],
            [11, 14],
            [12, 14],
            [13, 14],
            [14, 22],
            [15, 23],
            [16, 23],
            [17, 18],
            [18, 19],
            [19, 20],
            [20, 21],
            [21, 22],
            [22, 23]

        ],
        errLine: [
        ],
        errNodes: [
        ]
    }

    companyGraphs.gjz031 = {
        nodes: [
            { id: 0, label: '大连金湾水产有限公司', class: 'type-on' },
            { id: 1, label: '提升泵1号', class: 'type-on' },
            { id: 2, label: '提升泵2号', class: 'type-on' },
            { id: 3, label: 'PAC加药', class: 'type-on' },
            { id: 4, label: 'PAM加药', class: 'type-on' },
            { id: 5, label: '气浮加药搅拌1号', class: 'type-on' },
            { id: 6, label: '气浮加药搅拌2号', class: 'type-on' },
            { id: 7, label: '气浮加药搅拌3号', class: 'type-on' },
            { id: 8, label: '罗茨风机', class: 'type-on' },
            { id: 9, label: '曝气风机', class: 'type-on' },
            { id: 10, label: 'PH电极', class: 'type-on' },
            { id: 11, label: '溶解氧电极', class: 'type-on' },
            { id: 12, label: '污泥回流泵', class: 'type-on' },
            { id: 13, label: '污泥加药泵1号', class: 'type-on' },
            { id: 14, label: '污泥加药泵2号', class: 'type-on' },
            { id: 15, label: '污泥池', class: 'type-on' },
            { id: 16, label: '过滤泵1号', class: 'type-on' },
            { id: 17, label: '过滤泵2号', class: 'type-on' },
            { id: 18, label: '原水', class: 'type-on' },
            { id: 19, label: '调节池', class: 'type-on' },
            { id: 20, label: '气浮系统', class: 'type-on' },
            { id: 21, label: '厌氧池', class: 'type-on' },
            { id: 22, label: '好氧池', class: 'type-on' },
            { id: 23, label: '沉淀池', class: 'type-on' },
            { id: 24, label: '过滤罐', class: 'type-on' }
        ],
        edges: [

            [1, 19],
            [2, 19],
            [3, 20],
            [4, 20],
            [5, 20],
            [6, 20],
            [7, 20],
            [8, 22],
            [9, 22],
            [10, 22],
            [11, 22],
            [12, 15],
            [13, 15],
            [14, 15],
            [15, 23],
            [16, 24],
            [17, 24],
            [18, 19],
            [19, 20],
            [20, 21],
            [21, 22],
            [22, 23],
            [23, 24]

        ],
        errLine: [
        ],
        errNodes: [
        ]
    }

    companyGraphs.gjz032 = {
        nodes: [
            { id: 0, label: '祥云食品', class: 'type-on' },
            { id: 1, label: '提升泵1', class: 'type-on' },
            { id: 2, label: '提升泵2', class: 'type-on' },
            { id: 3, label: '气浮容器泵', class: 'type-on' },
            { id: 4, label: 'PAC加药泵', class: 'type-on' },
            { id: 5, label: 'PAM加药泵', class: 'type-on' },
            { id: 6, label: '刮渣机', class: 'type-on' },
            { id: 7, label: '絮凝搅拌机', class: 'type-on' },
            { id: 8, label: '曝气风机1', class: 'type-on' },
            { id: 9, label: '曝气风机2', class: 'type-on' },
            { id: 10, label: 'PH探头', class: 'type-on' },
            { id: 11, label: '溶解氧探头', class: 'type-on' },
            { id: 12, label: '压滤机', class: 'type-on' },
            { id: 13, label: '污泥池', class: 'type-on' },
            { id: 14, label: '自吸泵1', class: 'type-on' },
            { id: 15, label: '自吸泵2', class: 'type-on' },
            { id: 16, label: '自吸泵3', class: 'type-on' },
            { id: 17, label: '排放泵1', class: 'type-on' },
            { id: 18, label: '排放泵2', class: 'type-on' },
            { id: 19, label: '排放泵3', class: 'type-on' },
            { id: 20, label: '调节池', class: 'type-on' },
            { id: 21, label: '气浮池', class: 'type-on' },
            { id: 22, label: '接触氧化池', class: 'type-on' },
            { id: 23, label: 'MBR膜反应池', class: 'type-on' },
            { id: 24, label: '清水池', class: 'type-on' },
            { id: 25, label: '出水', class: 'type-on' },
            { id: 26, label: '厌氧池', class: 'type-on' }

        ],
        edges: [

            [1, 20],
            [2, 20],
            [3, 21],
            [4, 21],
            [5, 21],
            [6, 21],
            [7, 4],
            [7, 5],
            [8, 22],
            [9, 22],
            [10, 22],
            [11, 22],
            [22, 13],
            [12, 13],
            [14, 23],
            [15, 23],
            [16, 23],
            [17, 24],
            [18, 24],
            [19, 24],
            [20, 21],
            [21, 26],
            [26, 22],
            [22, 23],
            [23, 24],
            [24, 25]
        ],
        errLine: [
        ],
        errNodes: [
        ]
    }

    companyGraphs.gjz033 = {
        nodes: [
            { id: 0, label: '獐子岛集团股份有限公司大连海胆食品分公司', class: 'type-on' },
            { id: 1, label: '提升泵1号', class: 'type-on' },
            { id: 2, label: '提升泵2号', class: 'type-on' },
            { id: 3, label: '气浮机', class: 'type-on' },
            { id: 4, label: '刮泥机', class: 'type-on' },
            { id: 5, label: '加药泵', class: 'type-on' },
            { id: 6, label: '加药搅拌', class: 'type-on' },
            { id: 7, label: '风机1号', class: 'type-on' },
            { id: 8, label: '风机2号', class: 'type-on' },
            { id: 9, label: 'PH电极', class: 'type-on' },
            { id: 10, label: '溶解氧电极', class: 'type-on' },
            { id: 11, label: '压滤机', class: 'type-on' },
            { id: 12, label: '污泥池', class: 'type-on' },
            { id: 13, label: '自吸泵1号', class: 'type-on' },
            { id: 14, label: '自吸泵2号', class: 'type-on' },
            { id: 15, label: '污泥回流泵', class: 'type-on' },
            { id: 16, label: '洗吸泵', class: 'type-on' },
            { id: 17, label: '排泥泵', class: 'type-on' },
            { id: 18, label: '清水泵1号', class: 'type-on' },
            { id: 19, label: '清水泵2号', class: 'type-on' },
            { id: 20, label: '原水', class: 'type-on' },
            { id: 21, label: '调节池', class: 'type-on' },
            { id: 22, label: '气浮系统', class: 'type-on' },
            { id: 23, label: '厌氧池', class: 'type-on' },
            { id: 24, label: '生物接触滤池', class: 'type-on' },
            { id: 25, label: 'MBR池', class: 'type-on' },
            { id: 26, label: '清水池', class: 'type-on' }
        ],
        edges: [

            [1, 21],
            [2, 21],
            [3, 22],
            [4, 22],
            [5, 22],
            [6, 22],
            [7, 24],
            [8, 24],
            [9, 24],
            [10, 24],
            [11, 12],
            [12, 25],
            [13, 25],
            [14, 25],
            [15, 25],
            [16, 25],
            [17, 25],
            [18, 26],
            [19, 26],
            [20, 21],
            [21, 22],
            [22, 23],
            [23, 24],
            [24, 25],
            [25, 26]

        ],
        errLine: [
        ],
        errNodes: [
        ]
    }

    companyGraphs.gjz037 = {
        nodes: [
            { id: 0, label: '大连黄海渔业总公司', class: 'type-on' },
            { id: 1, label: '提升泵', class: 'type-on' },
            { id: 2, label: '风机1号', class: 'type-on' },
            { id: 3, label: '风机2号', class: 'type-on' },
            { id: 4, label: 'PH电极', class: 'type-on' },
            { id: 5, label: '溶解氧电极', class: 'type-on' },
            { id: 6, label: '清水泵1号', class: 'type-on' },
            { id: 7, label: '清水泵2号', class: 'type-on' },
            { id: 8, label: '原水', class: 'type-on' },
            { id: 9, label: '调节池', class: 'type-on' },
            { id: 10, label: '曝气池1', class: 'type-on' },
            { id: 11, label: '曝气池2', class: 'type-on' },
            { id: 12, label: '生物接触滤池', class: 'type-on' },
            { id: 13, label: '沉淀池', class: 'type-on' },
            { id: 14, label: '清水池', class: 'type-on' },
            { id: 15, label: '风机', class: 'type-on' }

        ],
        edges: [
            [1, 9],
            [2, 15],
            [3, 15],
            [4, 11],
            [5, 11],
            [6, 14],
            [7, 14],
            [15, 10],
            [15, 11],
            [15, 12],
            [8, 9],
            [9, 10],
            [10, 11],
            [11, 12],
            [12, 13],
            [13, 14]

        ],
        errLine: [
        ],
        errNodes: [
        ]
    }

    companyGraphs.gjz042 = {
        nodes: [
            { id: 0, label: '大连市瀚洋固废处置有限公司', class: 'type-on' },
            { id: 1, label: '提升泵', class: 'type-on' },
            { id: 2, label: '暖气风机1', class: 'type-on' },
            { id: 3, label: '暖气风机2', class: 'type-on' },
            { id: 4, label: 'PH探头', class: 'type-on' },
            { id: 5, label: '溶解氧探头', class: 'type-on' },
            { id: 6, label: '中间池提升泵', class: 'type-on' },
            { id: 7, label: '加药1', class: 'type-on' },
            { id: 8, label: '加药2', class: 'type-on' },
            { id: 9, label: '清水池提升泵', class: 'type-on' },
            { id: 10, label: '调节池', class: 'type-on' },
            { id: 11, label: '水解池', class: 'type-on' },
            { id: 12, label: '曝气池', class: 'type-on' },
            { id: 13, label: '中间池', class: 'type-on' },
            { id: 14, label: '斜板沉淀池', class: 'type-on' },
            { id: 15, label: '清水池', class: 'type-on' },
            { id: 16, label: '出水', class: 'type-on' }
        ],
        edges: [

            [1, 10],
            [2, 12],
            [3, 12],
            [4, 12],
            [5, 12],
            [6, 13],
            [7, 14],
            [8, 14],
            [9, 15],
            [10, 11],
            [11, 12],
            [12, 13],
            [13, 14],
            [14, 15],
            [15, 16]
        ],
        errLine: [
        ],
        errNodes: [
        ]
    }

    companyGraphs.gjz044 = {
        nodes: [
            { id: 0, label: '大连春岛木业集成有限公司', class: 'type-on' },
            { id: 1, label: '提升泵', class: 'type-on' },
            { id: 2, label: '中间泵1号', class: 'type-on' },
            { id: 3, label: '中间泵2号', class: 'type-on' },
            { id: 4, label: '大风机1号', class: 'type-on' },
            { id: 5, label: '大风机2号', class: 'type-on' },
            { id: 6, label: '小风机1号', class: 'type-on' },
            { id: 7, label: '小风机2号', class: 'type-on' },
            { id: 8, label: '风机', class: 'type-on' },
            { id: 9, label: 'PH电极', class: 'type-on' },
            { id: 10, label: '溶解氧电极', class: 'type-on' },
            { id: 11, label: '循环小泵1号', class: 'type-on' },
            { id: 12, label: '循环小泵2号', class: 'type-on' },
            { id: 13, label: '原水', class: 'type-on' },
            { id: 14, label: '调节池', class: 'type-on' },
            { id: 15, label: '中间池', class: 'type-on' },
            { id: 16, label: '曝气池', class: 'type-on' },
            { id: 17, label: '膜池', class: 'type-on' },
            { id: 18, label: '二沉池', class: 'type-on' },
            { id: 19, label: '清水池', class: 'type-on' }
        ],
        edges: [

            [1, 14],
            [2, 15],
            [3, 15],
            [4, 8],
            [5, 8],
            [6, 8],
            [7, 8],
            [8, 16],
            [9, 16],
            [10, 16],
            [8, 17],
            [11, 18],
            [12, 18],
            [13, 14],
            [14, 15],
            [15, 16],
            [16, 17],
            [17, 18],
            [18, 19]
        ],
        errLine: [
        ],
        errNodes: [
        ]
    }

    companyGraphs.gjz047 = {
        nodes: [
            { id: 0, label: '原水', class: 'type-on' },
            { id: 1, label: '调节池', class: 'type-on' },
            { id: 2, label: 'AO生物池', class: 'type-on' },
            { id: 3, label: 'MBR槽', class: 'type-on' },
            { id: 4, label: '二沉池', class: 'type-on' },
            { id: 5, label: '清水池', class: 'type-on' },
            { id: 6, label: '消毒池', class: 'type-on' },
            { id: 7, label: '风机', class: 'type-on' },
            { id: 8, label: 'PH电极', class: 'type-on' },
            { id: 9, label: '溶解氧电极', class: 'type-on' },
            { id: 10, label: '回流泵', class: 'type-on' },
            { id: 11, label: '清水泵', class: 'type-on' },
            { id: 12, label: '大连爱尔眼科医院', class: 'type-on' }
        ],
        edges: [
            [0, 1],
            [1, 2],
            [2, 3],
            [3, 4],
            [4, 5],
            [5, 6],
            [7, 2],
            [7, 3],
            [8, 3],
            [9, 3],
            [10, 4],
            [11, 5]
        ],
        errLine: [],
        errNodes: []
    }

    // 复州河
    companyGraphs.fzh001 = {
        nodes: [
            { id: 0, label: '大连安德利果蔬汁有限公司', class: 'type-on' },
            { id: 1, label: '1号集水池泵', class: 'type-on' },
            { id: 2, label: '冲洗泵', class: 'type-on' },
            { id: 3, label: '初沉1号泵', class: 'type-on' },
            { id: 4, label: '初沉2号泵', class: 'type-on' },
            { id: 5, label: '加药罐PH一体机', class: 'type-on' },
            { id: 6, label: '加药罐', class: 'type-on' },
            { id: 7, label: '气浮刮渣机', class: 'type-on' },
            { id: 8, label: '加减搅拌机', class: 'type-on' },
            { id: 9, label: '加减泵', class: 'type-on' },
            { id: 10, label: 'PAC搅拌机', class: 'type-on' },
            { id: 11, label: 'PAM搅拌机', class: 'type-on' },
            { id: 12, label: '1号气浮溶气泵', class: 'type-on' },
            { id: 13, label: '2号气浮溶气泵', class: 'type-on' },
            { id: 14, label: '气浮空压机', class: 'type-on' },
            { id: 15, label: 'PAC计量泵', class: 'type-on' },
            { id: 16, label: 'PAM计量泵', class: 'type-on' },
            { id: 17, label: '中间水池泵1', class: 'type-on' },
            { id: 18, label: '中间水池泵2', class: 'type-on' },
            { id: 19, label: '中间水池泵3', class: 'type-on' },
            { id: 20, label: 'PH电极1号', class: 'type-on' },
            { id: 21, label: 'PH电极2号', class: 'type-on' },
            { id: 22, label: '溶解氧电极', class: 'type-on' },
            { id: 23, label: '风机1号', class: 'type-on' },
            { id: 24, label: '风机2号', class: 'type-on' },
            { id: 25, label: '风机3号', class: 'type-on' },
            { id: 26, label: '污泥回流泵1号', class: 'type-on' },
            { id: 27, label: '污泥回流泵2号', class: 'type-on' },
            { id: 28, label: '二沉池刮泥机', class: 'type-on' },
            { id: 29, label: '离心泵1号', class: 'type-on' },
            { id: 30, label: '二沉池污泥泵', class: 'type-on' },
            { id: 31, label: '离心泵2号', class: 'type-on' },
            { id: 32, label: '浓缩池刮泥', class: 'type-on' },
            { id: 33, label: '污脱加药搅拌机', class: 'type-on' },
            { id: 34, label: '污脱加药', class: 'type-on' },
            { id: 35, label: '集水池', class: 'type-on' },
            { id: 36, label: '初沉池', class: 'type-on' },
            { id: 37, label: '气浮系统', class: 'type-on' },
            { id: 38, label: '中间水池', class: 'type-on' },
            { id: 39, label: '水解池', class: 'type-on' },
            { id: 40, label: '厌氧池', class: 'type-on' },
            { id: 41, label: '好氧池', class: 'type-on' },
            { id: 42, label: '二沉池', class: 'type-on' },
            { id: 43, label: '污泥池', class: 'type-on' },
            { id: 44, label: '污泥脱水', class: 'type-on' },
            { id: 45, label: '出水', class: 'type-on' }
        ],
        edges: [

            [1, 35],
            [2, 35],
            [3, 36],
            [4, 36],
            [5, 6],
            [6, 37],
            [7, 37],
            [8, 37],
            [9, 37],
            [10, 37],
            [11, 37],
            [12, 37],
            [13, 37],
            [14, 37],
            [15, 37],
            [16, 37],
            [17, 38],
            [18, 38],
            [19, 38],
            [20, 39],
            [21, 40],
            [22, 41],
            [23, 41],
            [24, 41],
            [25, 41],
            [26, 42],
            [27, 42],
            [28, 42],
            [29, 42],
            [30, 42],
            [31, 42],
            [32, 43],
            [33, 44],
            [34, 44],
            [35, 36],
            [36, 37],
            [37, 38],
            [38, 39],
            [39, 40],
            [40, 41],
            [41, 42],
            [42, 43],
            [43, 44],
            [42, 45]

        ],
        errLine: [
        ],
        errNodes: [
        ]
    }

    companyGraphs.fzh002 = {
        nodes: [
            { id: 0, label: '大连成达食品有限公司', class: 'type-on' },
            { id: 1, label: '调节提升泵', class: 'type-on' },
            { id: 2, label: 'PH电极一体机', class: 'type-on' },
            { id: 3, label: '加药罐', class: 'type-on' },
            { id: 4, label: 'PH电极1号', class: 'type-on' },
            { id: 5, label: 'PAC加药1号', class: 'type-on' },
            { id: 6, label: 'PAC加药2号', class: 'type-on' },
            { id: 7, label: 'PAM加药1号', class: 'type-on' },
            { id: 8, label: 'PAM加药2号', class: 'type-on' },
            { id: 9, label: '气浮搅拌1号', class: 'type-on' },
            { id: 10, label: '气浮搅拌2号', class: 'type-on' },
            { id: 11, label: '气浮搅拌3号', class: 'type-on' },
            { id: 12, label: '气浮搅拌4号', class: 'type-on' },
            { id: 13, label: '溶气泵1号', class: 'type-on' },
            { id: 14, label: '溶气泵2号', class: 'type-on' },
            { id: 15, label: '刮渣机1号', class: 'type-on' },
            { id: 16, label: '刮渣机2号', class: 'type-on' },
            { id: 17, label: '污泥槽搅拌', class: 'type-on' },
            { id: 18, label: '污泥槽加药', class: 'type-on' },
            { id: 19, label: '备用', class: 'type-on' },
            { id: 20, label: '污泥槽', class: 'type-on' },
            { id: 21, label: '水解排泥泵1号', class: 'type-on' },
            { id: 22, label: '水解排泥泵1号', class: 'type-on' },
            { id: 23, label: '污泥泵1号', class: 'type-on' },
            { id: 24, label: '污泥泵2号', class: 'type-on' },
            { id: 25, label: '搅拌机', class: 'type-on' },
            { id: 26, label: '水解循环泵', class: 'type-on' },
            { id: 27, label: '水解布水泵1号', class: 'type-on' },
            { id: 28, label: '水解布水泵2号', class: 'type-on' },
            { id: 29, label: '风机1号', class: 'type-on' },
            { id: 30, label: '风机2号', class: 'type-on' },
            { id: 31, label: 'PH电极2号', class: 'type-on' },
            { id: 32, label: '溶解氧电极', class: 'type-on' },
            { id: 33, label: '调节池', class: 'type-on' },
            { id: 34, label: '气浮系统', class: 'type-on' },
            { id: 35, label: '水解酸化池', class: 'type-on' },
            { id: 36, label: '厌氧池', class: 'type-on' },
            { id: 37, label: '好氧池', class: 'type-on' },
            { id: 38, label: '出水', class: 'type-on' }
        ],
        edges: [

            [1, 33],
            [2, 3],
            [3, 34],
            [4, 34],
            [5, 34],
            [6, 34],
            [7, 34],
            [8, 34],
            [9, 34],
            [10, 34],
            [11, 34],
            [12, 34],
            [13, 34],
            [14, 34],
            [15, 34],
            [16, 34],
            [17, 20],
            [18, 20],
            [19, 20],
            [20, 35],
            [21, 35],
            [22, 35],
            [23, 35],
            [24, 35],
            [25, 35],
            [26, 35],
            [27, 35],
            [28, 35],
            [29, 37],
            [30, 37],
            [31, 37],
            [32, 37],
            [33, 34],
            [34, 35],
            [35, 36],
            [36, 37],
            [37, 38]
        ],
        errLine: [
        ],
        errNodes: [
        ]
    }

    companyGraphs.fzh003 = {
        nodes: [
            { id: 0, label: '大连德鸿食品有限公司', class: 'type-on' },
            { id: 1, label: '调节提升泵', class: 'type-on' },
            { id: 2, label: '气浮刮渣机', class: 'type-on' },
            { id: 3, label: '气浮溶气泵', class: 'type-on' },
            { id: 4, label: '气浮排泥泵', class: 'type-on' },
            { id: 5, label: 'PAC计量泵', class: 'type-on' },
            { id: 6, label: 'PAM计量泵', class: 'type-on' },
            { id: 7, label: 'PAC搅拌机', class: 'type-on' },
            { id: 8, label: 'PAM搅拌机', class: 'type-on' },
            { id: 9, label: 'PH电极1号', class: 'type-on' },
            { id: 10, label: '水解排泥泵1号', class: 'type-on' },
            { id: 11, label: '水解排泥泵2号', class: 'type-on' },
            { id: 12, label: '水解提升泵', class: 'type-on' },
            { id: 13, label: '风机1号', class: 'type-on' },
            { id: 14, label: '风机2号', class: 'type-on' },
            { id: 15, label: '风机3号', class: 'type-on' },
            { id: 16, label: 'PH电极2号', class: 'type-on' },
            { id: 17, label: '溶解氧电极', class: 'type-on' },
            { id: 18, label: '离心供料机', class: 'type-on' },
            { id: 19, label: '过滤提升泵', class: 'type-on' },
            { id: 20, label: '二沉池污泥泵', class: 'type-on' },
            { id: 21, label: '调节池', class: 'type-on' },
            { id: 22, label: '气浮系统', class: 'type-on' },
            { id: 23, label: '水解池', class: 'type-on' },
            { id: 24, label: '好氧池', class: 'type-on' },
            { id: 25, label: '污泥池', class: 'type-on' },
            { id: 26, label: '沉淀池', class: 'type-on' },
            { id: 27, label: '出水', class: 'type-on' }
        ],
        edges: [
            [1, 21],
            [2, 22],
            [3, 22],
            [4, 22],
            [5, 22],
            [6, 22],
            [7, 22],
            [8, 22],
            [9, 23],
            [10, 23],
            [11, 23],
            [12, 23],
            [13, 24],
            [14, 24],
            [15, 24],
            [16, 24],
            [17, 24],
            [18, 25],
            [19, 26],
            [20, 26],
            [21, 22],
            [22, 23],
            [23, 24],
            [24, 25],
            [25, 26],
            [26, 27]
        ],
        errLine: [
        ],
        errNodes: [
        ]
    }

    companyGraphs.fzh004 = {
        nodes: [
            { id: 0, label: '大连复州肉联有限公司', class: 'type-on' },
            { id: 1, label: '提升泵1号', class: 'type-on' },
            { id: 2, label: '提升泵2号', class: 'type-on' },
            { id: 3, label: '气浮刮渣机', class: 'type-on' },
            { id: 4, label: '气浮加压泵1', class: 'type-on' },
            { id: 5, label: '气浮加压泵2', class: 'type-on' },
            { id: 6, label: '气浮进水PH', class: 'type-on' },
            { id: 7, label: '气浮出水PH', class: 'type-on' },
            { id: 8, label: '好氧池DO', class: 'type-on' },
            { id: 9, label: '风机1号', class: 'type-on' },
            { id: 10, label: '风机2号', class: 'type-on' },
            { id: 11, label: '污泥提升泵1号', class: 'type-on' },
            { id: 12, label: '污泥提升泵2号', class: 'type-on' },
            { id: 13, label: '调节池', class: 'type-on' },
            { id: 14, label: '气浮系统', class: 'type-on' },
            { id: 15, label: '好氧池', class: 'type-on' },
            { id: 16, label: '沉淀池', class: 'type-on' }
        ],
        edges: [
            [1, 13],
            [2, 13],
            [3, 14],
            [4, 14],
            [5, 14],
            [6, 14],
            [7, 14],
            [8, 15],
            [9, 15],
            [10, 15],
            [11, 16],
            [12, 16],
            [13, 14],
            [14, 15],
            [15, 16]
        ],
        errLine: [
        ],
        errNodes: [
        ]
    }

    companyGraphs.fzh005 = {
        nodes: [
            { id: 0, label: '大连华康新新有限公司', class: 'type-on' },
            { id: 1, label: '调节提升泵', class: 'type-on' },
            { id: 2, label: '1号搅拌风机', class: 'type-on' },
            { id: 3, label: '2号搅拌风机', class: 'type-on' },
            { id: 4, label: 'PH电极1号', class: 'type-on' },
            { id: 5, label: 'AP潜水搅拌机1号', class: 'type-on' },
            { id: 6, label: 'AP潜水搅拌机2号', class: 'type-on' },
            { id: 7, label: 'AN潜水搅拌机1号', class: 'type-on' },
            { id: 8, label: 'AN潜水搅拌机2号', class: 'type-on' },
            { id: 9, label: '风机1号', class: 'type-on' },
            { id: 10, label: '风机2号', class: 'type-on' },
            { id: 11, label: 'PH电极2号', class: 'type-on' },
            { id: 12, label: '溶解氧电极', class: 'type-on' },
            { id: 13, label: '排泥泵1号', class: 'type-on' },
            { id: 14, label: '排泥泵2号', class: 'type-on' },
            { id: 15, label: '混合液回流1号', class: 'type-on' },
            { id: 16, label: '混合液回流2号', class: 'type-on' },
            { id: 17, label: '混凝排泥泵1号', class: 'type-on' },
            { id: 18, label: '混凝排泥泵2号', class: 'type-on' },
            { id: 19, label: '砂虑反洗泵1号', class: 'type-on' },
            { id: 20, label: '砂虑反洗泵2号', class: 'type-on' },
            { id: 21, label: '调节池', class: 'type-on' },
            { id: 22, label: '气浮系统', class: 'type-on' },
            { id: 23, label: '水解酸化池', class: 'type-on' },
            { id: 24, label: '缺氧池', class: 'type-on' },
            { id: 25, label: '好氧池', class: 'type-on' },
            { id: 26, label: '二沉池', class: 'type-on' },
            { id: 27, label: '污泥池', class: 'type-on' },
            { id: 28, label: '砂虑池', class: 'type-on' },
            { id: 29, label: '出水', class: 'type-on' }
        ],
        edges: [
            [1, 21],
            [2, 22],
            [3, 22],
            [4, 23],
            [5, 24],
            [6, 24],
            [7, 24],
            [8, 24],
            [9, 25],
            [10, 25],
            [11, 25],
            [12, 25],
            [13, 26],
            [14, 26],
            [15, 27],
            [16, 27],
            [17, 27],
            [18, 27],
            [19, 28],
            [20, 28],
            [21, 22],
            [22, 23],
            [23, 24],
            [24, 25],
            [25, 26],
            [26, 27],
            [26, 28],
            [28, 29]
        ],
        errLine: [
        ],
        errNodes: [
        ]
    }

    companyGraphs.fzh006 = {
        nodes: [
            { id: 0, label: '大连夹河纺织有限公司', class: 'type-on' },
            { id: 1, label: '调节池提升泵', class: 'type-on' },
            { id: 2, label: '超声波液位计', class: 'type-on' },
            { id: 3, label: '加药泵1号', class: 'type-on' },
            { id: 4, label: '加药泵2号', class: 'type-on' },
            { id: 5, label: '加药搅拌1号', class: 'type-on' },
            { id: 6, label: '压滤机', class: 'type-on' },
            { id: 7, label: '加药搅拌2号', class: 'type-on' },
            { id: 8, label: '加药搅拌3号', class: 'type-on' },
            { id: 9, label: '加药泵3号', class: 'type-on' },
            { id: 10, label: '加药泵4号', class: 'type-on' },
            { id: 11, label: '加药泵5号', class: 'type-on' },
            { id: 12, label: '气浮机', class: 'type-on' },
            { id: 13, label: '刮泥机', class: 'type-on' },
            { id: 14, label: '中间池提升泵', class: 'type-on' },
            { id: 15, label: 'PH电极1号', class: 'type-on' },
            { id: 16, label: '1号风机', class: 'type-on' },
            { id: 17, label: '2号风机', class: 'type-on' },
            { id: 18, label: 'PH电极2号', class: 'type-on' },
            { id: 19, label: '溶解氧电极', class: 'type-on' },
            { id: 20, label: '反洗泵', class: 'type-on' },
            { id: 21, label: '出水吸引泵1号', class: 'type-on' },
            { id: 22, label: '出水吸引泵2号', class: 'type-on' },
            { id: 23, label: '调节池', class: 'type-on' },
            { id: 24, label: 'PH调节池', class: 'type-on' },
            { id: 25, label: '沉淀池', class: 'type-on' },
            { id: 26, label: '气浮池', class: 'type-on' },
            { id: 27, label: '中间池', class: 'type-on' },
            { id: 28, label: '厌氧池', class: 'type-on' },
            { id: 29, label: '好氧池', class: 'type-on' },
            { id: 30, label: 'MBR膜池', class: 'type-on' },
            { id: 31, label: '出水', class: 'type-on' },
            { id: 32, label: '污泥池', class: 'type-on' }

        ],
        edges: [
            [1, 23],
            [2, 23],
            [3, 24],
            [4, 24],
            [5, 24],
            [6, 32],
            [7, 26],
            [8, 26],
            [9, 26],
            [10, 26],
            [11, 26],
            [12, 26],
            [13, 26],
            [14, 27],
            [15, 28],
            [16, 29],
            [17, 29],
            [18, 29],
            [19, 29],
            [20, 30],
            [21, 30],
            [22, 30],
            [23, 24],
            [24, 25],
            [25, 32],
            [25, 26],
            [26, 27],
            [27, 28],
            [28, 29],
            [29, 30],
            [30, 31]

        ],
        errLine: [
        ],
        errNodes: [
        ]
    }

    companyGraphs.fzh007 = {
        nodes: [
            { id: 0, label: '大连凯隆食品有限公司', class: 'type-on' },
            { id: 1, label: '1号集水池泵', class: 'type-on' },
            { id: 2, label: '2号集水池泵', class: 'type-on' },
            { id: 3, label: '调节池泵1号', class: 'type-on' },
            { id: 4, label: '调节池泵2号', class: 'type-on' },
            { id: 5, label: '调节池泵3号', class: 'type-on' },
            { id: 6, label: '加药计量泵', class: 'type-on' },
            { id: 7, label: '加药搅拌机', class: 'type-on' },
            { id: 8, label: '中间泵1号', class: 'type-on' },
            { id: 9, label: '中间泵2号', class: 'type-on' },
            { id: 10, label: '中间泵3号', class: 'type-on' },
            { id: 11, label: '潜水搅拌机1号', class: 'type-on' },
            { id: 12, label: '潜水搅拌机2号', class: 'type-on' },
            { id: 13, label: '潜水搅拌机3号', class: 'type-on' },
            { id: 14, label: 'PH电极1号', class: 'type-on' },
            { id: 15, label: '1号风机', class: 'type-on' },
            { id: 16, label: '2号风机', class: 'type-on' },
            { id: 17, label: 'PH电极2号', class: 'type-on' },
            { id: 18, label: '溶解氧电极', class: 'type-on' },
            { id: 19, label: '污泥泵', class: 'type-on' },
            { id: 20, label: '1号螺杆泵', class: 'type-on' },
            { id: 21, label: '2号螺杆泵', class: 'type-on' },
            { id: 22, label: '无轴输送机', class: 'type-on' },
            { id: 23, label: '污泥回流泵', class: 'type-on' },
            { id: 24, label: '混合液回流泵', class: 'type-on' },
            { id: 25, label: '污泥池', class: 'type-on' },
            { id: 26, label: '反冲洗泵', class: 'type-on' },
            { id: 27, label: '集水池', class: 'type-on' },
            { id: 28, label: '调节池', class: 'type-on' },
            { id: 29, label: '气浮池', class: 'type-on' },
            { id: 30, label: '中间池', class: 'type-on' },
            { id: 31, label: '水解酸化池', class: 'type-on' },
            { id: 32, label: '好氧池', class: 'type-on' },
            { id: 33, label: '二沉池', class: 'type-on' },
            { id: 34, label: '过滤罐', class: 'type-on' },
            { id: 35, label: '出水', class: 'type-on' }
        ],
        edges: [
            [1, 27],
            [2, 27],
            [3, 28],
            [4, 28],
            [5, 28],
            [6, 29],
            [7, 29],
            [8, 30],
            [9, 30],
            [10, 30],
            [11, 31],
            [12, 31],
            [13, 31],
            [14, 31],
            [15, 32],
            [16, 32],
            [17, 32],
            [18, 32],
            [19, 33],
            [20, 25],
            [21, 25],
            [22, 25],
            [23, 25],
            [24, 25],
            [26, 34],
            [27, 28],
            [28, 29],
            [29, 30],
            [30, 31],
            [31, 32],
            [32, 33],
            [33, 34],
            [33, 25],
            [34, 35]
        ],
        errLine: [
        ],
        errNodes: [
        ]
    }

    companyGraphs.fzh008 = {
        nodes: [
            { id: 0, label: '大连铭川食品有限公司', class: 'type-on' },
            { id: 1, label: '调节池泵1号', class: 'type-on' },
            { id: 2, label: '调节池泵2号', class: 'type-on' },
            { id: 3, label: '气浮溶气泵A', class: 'type-on' },
            { id: 4, label: '气浮溶气泵B', class: 'type-on' },
            { id: 5, label: '气浮溶气泵C', class: 'type-on' },
            { id: 6, label: '加药计量泵D', class: 'type-on' },
            { id: 7, label: '刮泥机', class: 'type-on' },
            { id: 8, label: '加药1号泵', class: 'type-on' },
            { id: 9, label: '加药2号泵', class: 'type-on' },
            { id: 10, label: '加药3号泵', class: 'type-on' },
            { id: 11, label: '加药搅拌1号', class: 'type-on' },
            { id: 12, label: '加药搅拌2号', class: 'type-on' },
            { id: 13, label: '加药搅拌3号', class: 'type-on' },
            { id: 14, label: 'PH电极1号', class: 'type-on' },
            { id: 15, label: '1号风机', class: 'type-on' },
            { id: 16, label: '2号风机', class: 'type-on' },
            { id: 17, label: 'PH电极2号', class: 'type-on' },
            { id: 18, label: '溶解氧电极', class: 'type-on' },
            { id: 19, label: '污泥泵', class: 'type-on' },
            { id: 20, label: '污泥回流泵', class: 'type-on' },
            { id: 21, label: '二沉刮泥机', class: 'type-on' },
            { id: 22, label: '污泥提升泵1号', class: 'type-on' },
            { id: 23, label: '污泥提升泵2号', class: 'type-on' },
            { id: 24, label: '中A池泵1号', class: 'type-on' },
            { id: 25, label: '中A池泵2号', class: 'type-on' },
            { id: 26, label: '中A池泵3号', class: 'type-on' },
            { id: 27, label: '中A池泵4号', class: 'type-on' },
            { id: 28, label: '反洗泵1号', class: 'type-on' },
            { id: 29, label: '中B池泵1号', class: 'type-on' },
            { id: 30, label: '中B池泵2号', class: 'type-on' },
            { id: 31, label: '中B池泵3号', class: 'type-on' },
            { id: 32, label: '中B池泵4号', class: 'type-on' },
            { id: 33, label: '反洗泵2号', class: 'type-on' },
            { id: 34, label: '反洗泵3号', class: 'type-on' },
            { id: 35, label: '清水泵', class: 'type-on' },
            { id: 36, label: '调节池', class: 'type-on' },
            { id: 37, label: '气浮池', class: 'type-on' },
            { id: 38, label: '厌氧池', class: 'type-on' },
            { id: 39, label: '好氧池', class: 'type-on' },
            { id: 40, label: '二沉池', class: 'type-on' },
            { id: 41, label: '中间水池A', class: 'type-on' },
            { id: 42, label: 'BAF1池', class: 'type-on' },
            { id: 43, label: '中间水池B', class: 'type-on' },
            { id: 44, label: 'BAF2池', class: 'type-on' },
            { id: 45, label: '清水池', class: 'type-on' },
            { id: 46, label: '出水', class: 'type-on' }
        ],
        edges: [
            [1, 36],
            [2, 36],
            [3, 37],
            [4, 37],
            [5, 37],
            [6, 37],
            [7, 37],
            [8, 37],
            [9, 37],
            [10, 37],
            [11, 37],
            [12, 37],
            [13, 37],
            [14, 38],
            [15, 39],
            [16, 39],
            [17, 39],
            [18, 39],
            [20, 40],
            [21, 40],
            [22, 40],
            [23, 40],
            [24, 41],
            [25, 41],
            [26, 41],
            [27, 41],
            [28, 42],
            [29, 43],
            [30, 43],
            [31, 43],
            [32, 43],
            [33, 44],
            [34, 44],
            [35, 45],
            [36, 37],
            [37, 38],
            [38, 39],
            [39, 40],
            [40, 41],
            [41, 42],
            [42, 43],
            [43, 44],
            [44, 45],
            [45, 46]
        ],
        errLine: [
        ],
        errNodes: [
        ]
    }

    companyGraphs.fzh009 = {
        nodes: [
            { id: 0, label: '大连荣昌食品有限公司', class: 'type-on' },
            { id: 1, label: '机械格栅', class: 'type-on' },
            { id: 2, label: '初沉池A1污泥泵', class: 'type-on' },
            { id: 3, label: '初沉池A2污泥泵', class: 'type-on' },
            { id: 4, label: '初沉池B1污泥泵', class: 'type-on' },
            { id: 5, label: '初沉池B2污泥泵', class: 'type-on' },
            { id: 6, label: '污泥池PAM加药泵', class: 'type-on' },
            { id: 7, label: '污泥脱水机', class: 'type-on' },
            { id: 8, label: '污泥反洗', class: 'type-on' },
            { id: 9, label: '污泥回流泵A', class: 'type-on' },
            { id: 10, label: '污泥回流泵B', class: 'type-on' },
            { id: 11, label: '污泥池', class: 'type-on' },
            { id: 12, label: '调节泵A', class: 'type-on' },
            { id: 13, label: '调节泵B', class: 'type-on' },
            { id: 14, label: '调节泵C', class: 'type-on' },
            { id: 15, label: '调节池风机A', class: 'type-on' },
            { id: 16, label: '调节池风机B', class: 'type-on' },
            { id: 17, label: '氢氧化钠加药泵A', class: 'type-on' },
            { id: 18, label: '氢氧化钠加药泵B', class: 'type-on' },
            { id: 19, label: 'PAM加药泵A', class: 'type-on' },
            { id: 20, label: 'PAM加药泵B', class: 'type-on' },
            { id: 21, label: 'PAC加药泵A', class: 'type-on' },
            { id: 22, label: 'PAC加药泵B', class: 'type-on' },
            { id: 23, label: '刮渣机', class: 'type-on' },
            { id: 24, label: '溶气泵', class: 'type-on' },
            { id: 25, label: '空压机', class: 'type-on' },
            { id: 26, label: 'PH反应搅拌', class: 'type-on' },
            { id: 27, label: 'PH反应槽', class: 'type-on' },
            { id: 28, label: 'PH点击1号', class: 'type-on' },
            { id: 29, label: '膜池曝气风机A', class: 'type-on' },
            { id: 30, label: '膜池曝气风机B', class: 'type-on' },
            { id: 31, label: '膜池曝气风机C', class: 'type-on' },
            { id: 32, label: 'PH点击2号', class: 'type-on' },
            { id: 33, label: '溶解氧电极', class: 'type-on' },
            { id: 34, label: '次氯酸钠加药泵A', class: 'type-on' },
            { id: 35, label: '次氯酸钠加药泵B', class: 'type-on' },
            { id: 36, label: '柠檬酸加药泵', class: 'type-on' },
            { id: 37, label: '膜清洗泵B', class: 'type-on' },
            { id: 38, label: '膜自吸A1泵', class: 'type-on' },
            { id: 39, label: '膜自吸A2泵', class: 'type-on' },
            { id: 40, label: '膜自吸B1泵', class: 'type-on' },
            { id: 41, label: '膜自吸B2泵', class: 'type-on' },
            { id: 42, label: '膜清洗泵A', class: 'type-on' },
            { id: 43, label: '清水泵A', class: 'type-on' },
            { id: 44, label: '清水泵B', class: 'type-on' },
            { id: 45, label: '格栅池', class: 'type-on' },
            { id: 46, label: '初沉池', class: 'type-on' },
            { id: 47, label: '调节池', class: 'type-on' },
            { id: 48, label: '气浮池', class: 'type-on' },
            { id: 49, label: '厌氧池', class: 'type-on' },
            { id: 50, label: '好氧池', class: 'type-on' },
            { id: 51, label: 'MBR膜池', class: 'type-on' },
            { id: 52, label: '清水池', class: 'type-on' },
            { id: 53, label: '出水', class: 'type-on' },
            { id: 54, label: '膜池曝气风机组', class: 'type-on' }

        ],
        edges: [
            [1, 45],
            [2, 46],
            [3, 46],
            [4, 46],
            [5, 46],
            [6, 11],
            [7, 11],
            [8, 11],
            [9, 11],
            [10, 11],
            [46, 11],
            [12, 47],
            [13, 47],
            [14, 47],
            [15, 47],
            [16, 47],
            [17, 48],
            [18, 48],
            [20, 48],
            [21, 48],
            [22, 48],
            [23, 48],
            [24, 48],
            [25, 48],
            [26, 27],
            [27, 48],
            [28, 49],
            [29, 54],
            [30, 54],
            [31, 54],
            [54, 50],
            [54, 51],
            [32, 50],
            [33, 50],
            [34, 51],
            [35, 51],
            [36, 51],
            [37, 51],
            [38, 51],
            [39, 51],
            [40, 51],
            [41, 51],
            [42, 51],
            [43, 53],
            [44, 53],
            [45, 46],
            [46, 47],
            [47, 48],
            [48, 49],
            [49, 50],
            [50, 51],
            [51, 52],
            [52, 53]
        ],
        errLine: [
        ],
        errNodes: [
        ]
    }

    companyGraphs.fzh010 = {
        nodes: [
            { id: 0, label: '大连山城辣根制品有限公司', class: 'type-on' },
            { id: 1, label: '调节池提升泵1号', class: 'type-on' },
            { id: 2, label: '调节池提升泵2号', class: 'type-on' },
            { id: 3, label: '气浮刮渣机', class: 'type-on' },
            { id: 4, label: '气浮溶气泵', class: 'type-on' },
            { id: 5, label: '气浮空压机', class: 'type-on' },
            { id: 6, label: '加药1号泵', class: 'type-on' },
            { id: 7, label: '加药2号泵', class: 'type-on' },
            { id: 8, label: '加药3号泵', class: 'type-on' },
            { id: 9, label: 'PH电极1号', class: 'type-on' },
            { id: 10, label: 'PH电极2号', class: 'type-on' },
            { id: 11, label: '溶解氧电极', class: 'type-on' },
            { id: 12, label: '风机1号', class: 'type-on' },
            { id: 13, label: '风机2号', class: 'type-on' },
            { id: 14, label: '风机3号', class: 'type-on' },
            { id: 15, label: '风机4号', class: 'type-on' },
            { id: 16, label: '污泥回流泵1号', class: 'type-on' },
            { id: 17, label: '污泥回流泵2号', class: 'type-on' },
            { id: 18, label: '调节池', class: 'type-on' },
            { id: 19, label: '气浮系统', class: 'type-on' },
            { id: 20, label: '厌氧池', class: 'type-on' },
            { id: 21, label: '好氧池', class: 'type-on' },
            { id: 22, label: '沉淀池', class: 'type-on' }
        ],
        edges: [
            [1, 18],
            [2, 18],
            [3, 19],
            [4, 19],
            [5, 19],
            [6, 19],
            [7, 19],
            [8, 19],
            [9, 20],
            [10, 21],
            [11, 21],
            [12, 21],
            [13, 21],
            [14, 21],
            [15, 21],
            [16, 22],
            [17, 22],
            [18, 19],
            [19, 20],
            [20, 21],
            [21, 22]
        ],
        errLine: [
        ],
        errNodes: [
        ]
    }

    companyGraphs.fzh011 = {
        nodes: [
            { id: 0, label: '大连顺祥牧业有限公司普兰店分公司', class: 'type-on' },
            { id: 1, label: '提升池提升泵', class: 'type-on' },
            { id: 2, label: '机械格栅', class: 'type-on' },
            { id: 3, label: '隔油池排污泵1号', class: 'type-on' },
            { id: 4, label: '隔油池排污泵2号', class: 'type-on' },
            { id: 5, label: '调节池提升泵1号', class: 'type-on' },
            { id: 6, label: '调节池提升泵2号', class: 'type-on' },
            { id: 7, label: '初沉池排泥泵1号', class: 'type-on' },
            { id: 8, label: '初沉池排泥泵2号', class: 'type-on' },
            { id: 9, label: '压缩机空压机', class: 'type-on' },
            { id: 10, label: '混合液回流1泵', class: 'type-on' },
            { id: 11, label: '混合液回流2泵', class: 'type-on' },
            { id: 12, label: '溶气泵', class: 'type-on' },
            { id: 13, label: '刮渣机', class: 'type-on' },
            { id: 14, label: '空气压缩机', class: 'type-on' },
            { id: 15, label: 'PH数采仪一体机', class: 'type-on' },
            { id: 16, label: '水解池循环泵', class: 'type-on' },
            { id: 17, label: '水解池排泥泵', class: 'type-on' },
            { id: 18, label: 'PH电极1号', class: 'type-on' },
            { id: 19, label: '风机1号', class: 'type-on' },
            { id: 20, label: '风机2号', class: 'type-on' },
            { id: 21, label: 'PH电极2号', class: 'type-on' },
            { id: 22, label: '溶解氧电极', class: 'type-on' },
            { id: 23, label: '砂率过滤泵1号', class: 'type-on' },
            { id: 24, label: '砂率过滤泵2号', class: 'type-on' },
            { id: 25, label: '提升池', class: 'type-on' },
            { id: 26, label: '隔油池', class: 'type-on' },
            { id: 27, label: '调节池', class: 'type-on' },
            { id: 28, label: '污泥池', class: 'type-on' },
            { id: 29, label: '初沉池', class: 'type-on' },
            { id: 30, label: '气浮池', class: 'type-on' },
            { id: 31, label: '加药罐', class: 'type-on' },
            { id: 32, label: '水解酸化池', class: 'type-on' },
            { id: 33, label: '好氧池', class: 'type-on' },
            { id: 34, label: '过滤罐', class: 'type-on' }
        ],
        edges: [
            [1, 25],
            [2, 25],
            [3, 26],
            [4, 26],
            [5, 27],
            [6, 27],
            [7, 29],
            [8, 29],
            [9, 28],
            [10, 28],
            [11, 28],
            [12, 30],
            [13, 30],
            [14, 30],
            [15, 31],
            [16, 32],
            [17, 32],
            [18, 32],
            [19, 33],
            [20, 33],
            [21, 33],
            [22, 33],
            [23, 34],
            [24, 34],
            [25, 26],
            [26, 27],
            [27, 29],
            [28, 29],
            [29, 30],
            [30, 32],
            [31, 30],
            [32, 33],
            [33, 34]
        ],
        errLine: [
        ],
        errNodes: [
        ]
    }

    companyGraphs.fzh012 = {
        nodes: [
            { id: 0, label: '大连顺祥食品有限公司普兰店分公司', class: 'type-on' },
            { id: 1, label: '机械格栅', class: 'type-on' },
            { id: 2, label: '调节池提升泵1号', class: 'type-on' },
            { id: 3, label: '调节池风机1号', class: 'type-on' },
            { id: 4, label: '调节池风机2号', class: 'type-on' },
            { id: 5, label: 'PH电极1号', class: 'type-on' },
            { id: 6, label: '气浮空压机', class: 'type-on' },
            { id: 7, label: '气浮溶气泵', class: 'type-on' },
            { id: 8, label: 'PH数采仪一体机', class: 'type-on' },
            { id: 9, label: 'PAC加药', class: 'type-on' },
            { id: 10, label: 'PAM加药', class: 'type-on' },
            { id: 11, label: '厌氧池提升泵1号', class: 'type-on' },
            { id: 12, label: '厌氧池提升泵2号', class: 'type-on' },
            { id: 13, label: '生化池风机1号', class: 'type-on' },
            { id: 14, label: '生化池风机2号', class: 'type-on' },
            { id: 15, label: '污泥回流池1号', class: 'type-on' },
            { id: 16, label: '污泥回流池2号', class: 'type-on' },
            { id: 17, label: 'PH电极2号', class: 'type-on' },
            { id: 18, label: '溶解氧电极', class: 'type-on' },
            { id: 19, label: '空压机', class: 'type-on' },
            { id: 20, label: '备用空压机', class: 'type-on' },
            { id: 21, label: '砂滤过滤泵1号', class: 'type-on' },
            { id: 22, label: '砂滤过滤泵2号', class: 'type-on' },
            { id: 23, label: '污泥脱水', class: 'type-on' },
            { id: 24, label: '污泥池', class: 'type-on' },
            { id: 25, label: '格栅池', class: 'type-on' },
            { id: 26, label: '隔油池', class: 'type-on' },
            { id: 27, label: '调节池', class: 'type-on' },
            { id: 28, label: '气浮池', class: 'type-on' },
            { id: 29, label: '加药罐', class: 'type-on' },
            { id: 30, label: '厌氧池', class: 'type-on' },
            { id: 31, label: '旧站生化池', class: 'type-on' },
            { id: 32, label: '生化池', class: 'type-on' },
            { id: 33, label: '过滤罐', class: 'type-on' },
            { id: 34, label: '旧站生化池风机1号', class: 'type-on' },
            { id: 35, label: '旧站生化池风机2号', class: 'type-on' }
        ],
        edges: [
            [1, 25],
            [2, 27],
            [3, 27],
            [4, 27],
            [5, 27],
            [6, 28],
            [7, 28],
            [8, 29],
            [9, 29],
            [10, 29],
            [29, 28],
            [11, 30],
            [12, 30],
            [13, 32],
            [14, 32],
            [15, 32],
            [16, 32],
            [17, 32],
            [18, 32],
            [19, 23],
            [20, 23],
            [23, 24],
            [32, 24],
            [21, 33],
            [22, 33],
            [25, 26],
            [26, 27],
            [27, 28],
            [28, 30],
            [30, 31],
            [34, 31],
            [35, 31],
            [31, 32],
            [32, 33]
        ],
        errLine: [
        ],
        errNodes: [
        ]
    }

    companyGraphs.fzh013 = {
        nodes: [
            { id: 0, label: '大连天鹏食品有限公司', class: 'type-on' },
            { id: 1, label: '气浮刮泥机', class: 'type-on' },
            { id: 2, label: '气浮提升泵', class: 'type-on' },
            { id: 3, label: 'PAC加药', class: 'type-on' },
            { id: 4, label: 'PAM加药', class: 'type-on' },
            { id: 5, label: 'PAC搅拌', class: 'type-on' },
            { id: 6, label: 'PAM搅拌', class: 'type-on' },
            { id: 7, label: 'PH电极1号', class: 'type-on' },
            { id: 8, label: '1号风机', class: 'type-on' },
            { id: 9, label: '2号风机', class: 'type-on' },
            { id: 10, label: '3号风机', class: 'type-on' },
            { id: 11, label: 'PH电极2号', class: 'type-on' },
            { id: 12, label: '溶解氧电极', class: 'type-on' },
            { id: 13, label: '二沉池污泥泵', class: 'type-on' },
            { id: 14, label: '污泥回流泵', class: 'type-on' },
            { id: 15, label: '污泥脱水', class: 'type-on' },
            { id: 16, label: '压滤机泵', class: 'type-on' },
            { id: 17, label: '污泥池', class: 'type-on' },
            { id: 18, label: '清洗1号泵', class: 'type-on' },
            { id: 19, label: '清洗2号泵', class: 'type-on' },
            { id: 20, label: '电磁流量计', class: 'type-on' },
            { id: 21, label: '调节池', class: 'type-on' },
            { id: 22, label: '气浮系统', class: 'type-on' },
            { id: 23, label: '厌氧池', class: 'type-on' },
            { id: 24, label: '好氧池', class: 'type-on' },
            { id: 25, label: '沉淀池', class: 'type-on' },
            { id: 26, label: '过滤罐', class: 'type-on' },
            { id: 27, label: '出水', class: 'type-on' }

        ],
        edges: [
            [1, 22],
            [2, 22],
            [3, 22],
            [4, 22],
            [5, 22],
            [6, 22],
            [7, 23],
            [8, 24],
            [9, 24],
            [10, 24],
            [11, 24],
            [12, 24],
            [13, 25],
            [14, 25],
            [15, 17],
            [16, 17],
            [18, 26],
            [19, 26],
            [21, 22],
            [22, 23],
            [23, 24],
            [24, 25],
            [25, 17],
            [25, 26],
            [26, 27]
        ],
        errLine: [
        ],
        errNodes: [
        ]
    }

    companyGraphs.fzh014 = {
        nodes: [
            { id: 0, label: '大连瓦窝社区污水站', class: 'type-on' },
            { id: 1, label: '1号提升泵', class: 'type-on' },
            { id: 2, label: '2号提升泵', class: 'type-on' },
            { id: 3, label: '1号风机', class: 'type-on' },
            { id: 4, label: '2号风机', class: 'type-on' },
            { id: 5, label: 'PH电极1号', class: 'type-on' },
            { id: 6, label: 'PH电极2号', class: 'type-on' },
            { id: 7, label: '溶解氧电极', class: 'type-on' },
            { id: 8, label: '1号回流泵', class: 'type-on' },
            { id: 9, label: '2号回流泵', class: 'type-on' },
            { id: 10, label: '1号污泥泵', class: 'type-on' },
            { id: 11, label: '2号污泥泵', class: 'type-on' },
            { id: 12, label: '调节池', class: 'type-on' },
            { id: 13, label: '厌氧池', class: 'type-on' },
            { id: 14, label: '好氧池1号', class: 'type-on' },
            { id: 15, label: '好氧池2号', class: 'type-on' },
            { id: 16, label: '沉淀池', class: 'type-on' },
            { id: 17, label: '出水', class: 'type-on' }
        ],
        edges: [
            [1, 12],
            [2, 12],
            [3, 14],
            [4, 14],
            [3, 15],
            [4, 15],
            [5, 14],
            [6, 15],
            [7, 15],
            [8, 16],
            [9, 16],
            [10, 16],
            [11, 16],
            [12, 13],
            [13, 14],
            [14, 15],
            [15, 16],
            [16, 17]
        ],
        errLine: [
        ],
        errNodes: [
        ]
    }

    companyGraphs.fzh015 = {
        nodes: [
            { id: 0, label: '大连完虹服装有限公司', class: 'type-on' },
            { id: 1, label: '调节池提升泵', class: 'type-on' },
            { id: 2, label: '初沉池提升泵', class: 'type-on' },
            { id: 3, label: 'PH电极1号', class: 'type-on' },
            { id: 4, label: '1号风机', class: 'type-on' },
            { id: 5, label: '2号风机', class: 'type-on' },
            { id: 6, label: 'PH电极2号', class: 'type-on' },
            { id: 7, label: '溶解氧电极', class: 'type-on' },
            { id: 8, label: '调节池', class: 'type-on' },
            { id: 9, label: '初沉池', class: 'type-on' },
            { id: 10, label: '纤维过滤池', class: 'type-on' },
            { id: 11, label: '生物接触氧化池', class: 'type-on' },
            { id: 12, label: '二沉池', class: 'type-on' },
            { id: 13, label: '出水', class: 'type-on' }
        ],
        edges: [
            [1, 8],
            [2, 9],
            [3, 10],
            [4, 11],
            [5, 11],
            [6, 11],
            [7, 11],
            [8, 9],
            [9, 10],
            [10, 11],
            [11, 12],
            [12, 13]
        ],
        errLine: [
        ],
        errNodes: [
        ]
    }

    companyGraphs.fzh016 = {
        nodes: [
            { id: 0, label: '大连冶金轴承有限公司', class: 'type-on' },
            { id: 1, label: '调节池提升泵', class: 'type-on' },
            { id: 2, label: '乳化液潜水泵', class: 'type-on' },
            { id: 3, label: 'PH电极1号', class: 'type-on' },
            { id: 4, label: '气浮刮泥机', class: 'type-on' },
            { id: 5, label: '气浮容气泵', class: 'type-on' },
            { id: 6, label: '气浮污泥泵', class: 'type-on' },
            { id: 7, label: 'NAOH加药泵', class: 'type-on' },
            { id: 8, label: 'PAC加药泵', class: 'type-on' },
            { id: 9, label: 'PAM加药泵', class: 'type-on' },
            { id: 10, label: '加药减速1号', class: 'type-on' },
            { id: 11, label: '加药减速2号', class: 'type-on' },
            { id: 12, label: '加药减速3号', class: 'type-on' },
            { id: 13, label: '气浮减速机4号', class: 'type-on' },
            { id: 14, label: '气浮减速机5号', class: 'type-on' },
            { id: 15, label: '罗茨风机', class: 'type-on' },
            { id: 16, label: 'PH电极2号', class: 'type-on' },
            { id: 17, label: '溶解氧电极', class: 'type-on' },
            { id: 18, label: '污泥泵', class: 'type-on' },
            { id: 19, label: '过滤潜水泵', class: 'type-on' },
            { id: 20, label: '过滤反吸泵', class: 'type-on' },
            { id: 21, label: '增压1号泵', class: 'type-on' },
            { id: 22, label: '增压2号泵', class: 'type-on' },
            { id: 23, label: '二氧化氯泵', class: 'type-on' },
            { id: 24, label: '二氧化氯发生器', class: 'type-on' },
            { id: 25, label: '调节池', class: 'type-on' },
            { id: 26, label: '气浮系统', class: 'type-on' },
            { id: 27, label: '好氧池', class: 'type-on' },
            { id: 28, label: '沉淀池', class: 'type-on' },
            { id: 29, label: '过滤罐', class: 'type-on' },
            { id: 30, label: '清水池', class: 'type-on' }
        ],
        edges: [
            [1, 25],
            [2, 25],
            [3, 25],
            [4, 26],
            [5, 26],
            [6, 26],
            [7, 26],
            [8, 26],
            [9, 26],
            [10, 26],
            [11, 26],
            [12, 26],
            [13, 26],
            [14, 26],
            [15, 27],
            [16, 27],
            [17, 27],
            [18, 28],
            [19, 29],
            [20, 29],
            [21, 29],
            [22, 29],
            [23, 30],
            [24, 30],
            [25, 26],
            [26, 27],
            [27, 28],
            [28, 29],
            [29, 30]
        ],
        errLine: [
        ],
        errNodes: [
        ]
    }

    companyGraphs.fzh017 = {
        nodes: [
            { id: 0, label: '大连真爱果业有限公司', class: 'type-on' },
            { id: 1, label: '机械格栅', class: 'type-on' },
            { id: 2, label: '斜筛绞笼', class: 'type-on' },
            { id: 3, label: 'Ph一体机', class: 'type-on' },
            { id: 4, label: '加药罐', class: 'type-on' },
            { id: 5, label: '中和提升泵1号', class: 'type-on' },
            { id: 6, label: '中和提升泵2号', class: 'type-on' },
            { id: 7, label: '酸化循环泵', class: 'type-on' },
            { id: 8, label: '酸化提升泵1号', class: 'type-on' },
            { id: 9, label: '酸化提升泵2号', class: 'type-on' },
            { id: 10, label: '水解小泵', class: 'type-on' },
            { id: 11, label: 'PH电极1号', class: 'type-on' },
            { id: 12, label: '厌氧提升泵1号', class: 'type-on' },
            { id: 13, label: '污泥泵', class: 'type-on' },
            { id: 14, label: '厌氧提升泵2号', class: 'type-on' },
            { id: 15, label: 'PH电极2号', class: 'type-on' },
            { id: 16, label: '溶解氧电极', class: 'type-on' },
            { id: 17, label: '风机1号', class: 'type-on' },
            { id: 18, label: '风机2号', class: 'type-on' },
            { id: 19, label: '打碱泵', class: 'type-on' },
            { id: 20, label: '气浮机', class: 'type-on' },
            { id: 21, label: '气浮PAC计量泵1号', class: 'type-on' },
            { id: 22, label: '空压机', class: 'type-on' },
            { id: 23, label: '气浮PAC计量泵2号', class: 'type-on' },
            { id: 24, label: 'PAC搅拌', class: 'type-on' },
            { id: 25, label: 'PAM搅拌', class: 'type-on' },
            { id: 26, label: '打碱搅拌机', class: 'type-on' },
            { id: 27, label: '酰胺计量泵', class: 'type-on' },
            { id: 28, label: '气浮刮渣机', class: 'type-on' },
            { id: 29, label: '格栅池', class: 'type-on' },
            { id: 30, label: '中和水池', class: 'type-on' },
            { id: 31, label: '水解酸化池', class: 'type-on' },
            { id: 32, label: '厌氧池', class: 'type-on' },
            { id: 33, label: '好氧池', class: 'type-on' },
            { id: 34, label: '气浮系统', class: 'type-on' },
            { id: 35, label: '过滤罐', class: 'type-on' }
        ],
        edges: [
            [1, 29],
            [2, 29],
            [3, 4],
            [4, 30],
            [5, 30],
            [6, 30],
            [7, 31],
            [8, 31],
            [9, 31],
            [10, 31],
            [11, 32],
            [12, 32],
            [13, 32],
            [14, 32],
            [15, 33],
            [16, 33],
            [17, 33],
            [18, 33],
            [19, 34],
            [20, 34],
            [21, 34],
            [22, 34],
            [23, 34],
            [24, 34],
            [25, 34],
            [26, 34],
            [27, 34],
            [28, 34],
            [29, 30],
            [30, 31],
            [31, 32],
            [32, 33],
            [33, 34],
            [34, 35]
        ],
        errLine: [
        ],
        errNodes: [
        ]
    }

    companyGraphs.fzh018 = {
        nodes: [
            { id: 0, label: '大连中佳食品有限公司', class: 'type-on' },
            { id: 1, label: '提升泵1号', class: 'type-on' },
            { id: 2, label: '提升泵2号', class: 'type-on' },
            { id: 3, label: '加药1号', class: 'type-on' },
            { id: 4, label: '加药2号', class: 'type-on' },
            { id: 5, label: '加药3号', class: 'type-on' },
            { id: 6, label: '加药4号', class: 'type-on' },
            { id: 7, label: '刮泥机', class: 'type-on' },
            { id: 8, label: 'PH电极1号', class: 'type-on' },
            { id: 9, label: '潜水搅拌机1号', class: 'type-on' },
            { id: 10, label: '潜水搅拌机2号', class: 'type-on' },
            { id: 11, label: 'PH电极2号', class: 'type-on' },
            { id: 12, label: '溶解氧电极', class: 'type-on' },
            { id: 13, label: '鼓风机1号', class: 'type-on' },
            { id: 14, label: '鼓风机2号', class: 'type-on' },
            { id: 15, label: '鼓风机3号', class: 'type-on' },
            { id: 16, label: '鼓风机4号', class: 'type-on' },
            { id: 17, label: '鼓风机5号', class: 'type-on' },
            { id: 18, label: '污泥泵', class: 'type-on' },
            { id: 19, label: '污泥回流泵', class: 'type-on' },
            { id: 20, label: '污泥加药泵', class: 'type-on' },
            { id: 21, label: '加药搅拌3号', class: 'type-on' },
            { id: 22, label: '加药搅拌4号', class: 'type-on' },
            { id: 23, label: '二沉池刮泥机', class: 'type-on' },
            { id: 24, label: '排污泵1号', class: 'type-on' },
            { id: 25, label: '排污泵2号', class: 'type-on' },
            { id: 26, label: '排污泵池', class: 'type-on' },
            { id: 27, label: '中间水池提升泵', class: 'type-on' },
            { id: 28, label: '调节泵1C', class: 'type-on' },
            { id: 29, label: '调节泵1D', class: 'type-on' },
            { id: 30, label: '调节池', class: 'type-on' },
            { id: 31, label: '气浮池', class: 'type-on' },
            { id: 32, label: '厌氧池', class: 'type-on' },
            { id: 33, label: '好氧池', class: 'type-on' },
            { id: 34, label: '二沉池', class: 'type-on' },
            { id: 35, label: '污泥池', class: 'type-on' },
            { id: 36, label: '中间水池', class: 'type-on' },
            { id: 37, label: '过滤池', class: 'type-on' },
            { id: 38, label: '清水池', class: 'type-on' },
            { id: 39, label: '出水', class: 'type-on' }
        ],
        edges: [
            [1, 30],
            [2, 30],
            [3, 31],
            [4, 31],
            [5, 31],
            [6, 31],
            [7, 31],
            [8, 31],
            [9, 32],
            [10, 32],
            [11, 33],
            [12, 33],
            [13, 33],
            [14, 33],
            [15, 33],
            [16, 33],
            [17, 33],
            [18, 35],
            [19, 35],
            [20, 35],
            [21, 35],
            [22, 35],
            [23, 34],
            [24, 34],
            [25, 34],
            [26, 34],
            [27, 36],
            [28, 38],
            [29, 38],
            [30, 31],
            [31, 32],
            [32, 33],
            [33, 34],
            [34, 35],
            [34, 36],
            [36, 37],
            [37, 38],
            [38, 39]
        ],
        errLine: [
        ],
        errNodes: [
        ]
    }

    companyGraphs.fzh019 = {
        nodes: [
            { id: 0, label: '大连中耀建材交易市场有限公司', class: 'type-on' },
            { id: 1, label: '集水提升泵1号', class: 'type-on' },
            { id: 2, label: '集水提升泵1号', class: 'type-on' },
            { id: 3, label: '机械格栅', class: 'type-on' },
            { id: 4, label: '调节池提升泵1号', class: 'type-on' },
            { id: 5, label: '调节池提升泵2号', class: 'type-on' },
            { id: 6, label: 'PH电极1号', class: 'type-on' },
            { id: 7, label: 'PH电极2号', class: 'type-on' },
            { id: 8, label: '溶解氧电极', class: 'type-on' },
            { id: 9, label: '1号风机', class: 'type-on' },
            { id: 10, label: '2号风机', class: 'type-on' },
            { id: 11, label: '风机', class: 'type-on' },
            { id: 12, label: '浓缩回流泵', class: 'type-on' },
            { id: 13, label: '出水吸引泵1号', class: 'type-on' },
            { id: 14, label: '出水吸引泵2号', class: 'type-on' },
            { id: 15, label: '膜池回流泵', class: 'type-on' },
            { id: 16, label: '出水吸引泵3号', class: 'type-on' },
            { id: 17, label: '出水吸引泵4号', class: 'type-on' },
            { id: 18, label: '集水池', class: 'type-on' },
            { id: 19, label: '格栅池', class: 'type-on' },
            { id: 20, label: '调节池', class: 'type-on' },
            { id: 21, label: '缺氧池', class: 'type-on' },
            { id: 22, label: '好氧池', class: 'type-on' },
            { id: 23, label: '膜池', class: 'type-on' },
            { id: 24, label: '污泥池', class: 'type-on' },
            { id: 25, label: '清水池', class: 'type-on' },
            { id: 26, label: '出水', class: 'type-on' }
        ],
        edges: [
            [1, 18],
            [2, 18],
            [3, 19],
            [4, 20],
            [5, 20],
            [6, 21],
            [7, 22],
            [8, 22],
            [9, 11],
            [10, 11],
            [11, 22],
            [11, 23],
            [12, 24],
            [13, 23],
            [14, 23],
            [15, 23],
            [16, 25],
            [17, 25],
            [18, 19],
            [19, 20],
            [20, 21],
            [21, 22],
            [22, 23],
            [23, 24],
            [23, 25],
            [25, 26]
        ],
        errLine: [
        ],
        errNodes: [
        ]
    }

    companyGraphs.fzh020 = {
        nodes: [
            { id: 0, label: '瓦房店龙城肉食品加工有限公司', class: 'type-on' },
            { id: 1, label: '调节池提升泵1号', class: 'type-on' },
            { id: 2, label: '调节池提升泵2号', class: 'type-on' },
            { id: 3, label: '气浮加压2号', class: 'type-on' },
            { id: 4, label: '气浮提升泵1号', class: 'type-on' },
            { id: 5, label: 'PAC搅拌1号', class: 'type-on' },
            { id: 6, label: '气浮加压1号', class: 'type-on' },
            { id: 7, label: '1号刮渣机', class: 'type-on' },
            { id: 8, label: '溶气泵', class: 'type-on' },
            { id: 9, label: 'PAM加药1号', class: 'type-on' },
            { id: 10, label: 'PAM搅拌1号', class: 'type-on' },
            { id: 11, label: 'PAC搅拌2号', class: 'type-on' },
            { id: 12, label: '气浮提升泵2号', class: 'type-on' },
            { id: 13, label: '2号气浮泵1号', class: 'type-on' },
            { id: 14, label: '2号气浮泵2号', class: 'type-on' },
            { id: 15, label: '2号刮渣机', class: 'type-on' },
            { id: 16, label: 'PAC加药2号', class: 'type-on' },
            { id: 17, label: '溶气泵2号', class: 'type-on' },
            { id: 18, label: 'PAM加药2号', class: 'type-on' },
            { id: 19, label: 'PAM搅拌2号', class: 'type-on' },
            { id: 20, label: '1号厌氧池PH电极', class: 'type-on' },
            { id: 21, label: '2号厌氧池PH电极', class: 'type-on' },
            { id: 22, label: '风机1号', class: 'type-on' },
            { id: 23, label: '风机2号', class: 'type-on' },
            { id: 24, label: '风机3号', class: 'type-on' },
            { id: 25, label: '溶解氧电极', class: 'type-on' },
            { id: 26, label: '污泥回流1号泵', class: 'type-on' },
            { id: 27, label: '污泥回流2号泵', class: 'type-on' },
            { id: 28, label: '清水泵1号', class: 'type-on' },
            { id: 29, label: '清水泵2号', class: 'type-on' },
            { id: 30, label: '隔油池', class: 'type-on' },
            { id: 31, label: '调节池', class: 'type-on' },
            { id: 32, label: '气浮1池', class: 'type-on' },
            { id: 33, label: '气浮2池', class: 'type-on' },
            { id: 34, label: '厌氧池', class: 'type-on' },
            { id: 35, label: '好氧池', class: 'type-on' },
            { id: 36, label: '污泥池', class: 'type-on' },
            { id: 37, label: '沉淀池', class: 'type-on' },
            { id: 38, label: '清水池', class: 'type-on' }
        ],
        edges: [
            [1, 31],
            [2, 31],
            [3, 32],
            [4, 32],
            [5, 32],
            [6, 32],
            [7, 32],
            [8, 32],
            [9, 32],
            [10, 32],
            [11, 33],
            [11, 33],
            [12, 33],
            [13, 33],
            [14, 33],
            [15, 33],
            [16, 33],
            [17, 33],
            [18, 33],
            [19, 33],
            [20, 34],
            [21, 34],
            [22, 35],
            [23, 35],
            [24, 35],
            [25, 35],
            [26, 36],
            [27, 36],
            [28, 38],
            [29, 38],
            [30, 31],
            [31, 32],
            [31, 33],
            [32, 34],
            [33, 34],
            [34, 35],
            [35, 37],
            [37, 36],
            [37, 38]
        ],
        errLine: [
        ],
        errNodes: [
        ]
    }

    companyGraphs.fzh021 = {
        nodes: [
            { id: 0, label: '瓦房店市中达食品有限公司', class: 'type-on' },
            { id: 1, label: '中间泵A', class: 'type-on' },
            { id: 2, label: '中间泵B', class: 'type-on' },
            { id: 3, label: 'PH电极1号', class: 'type-on' },
            { id: 4, label: 'PH电极2号', class: 'type-on' },
            { id: 5, label: '溶解氧电极', class: 'type-on' },
            { id: 6, label: '风机1号', class: 'type-on' },
            { id: 7, label: '风机2号', class: 'type-on' },
            { id: 8, label: '膜池风机A', class: 'type-on' },
            { id: 9, label: '膜池风机C', class: 'type-on' },
            { id: 10, label: '膜池风机E', class: 'type-on' },
            { id: 11, label: '出水泵A', class: 'type-on' },
            { id: 12, label: '出水泵B', class: 'type-on' },
            { id: 13, label: '隔油池', class: 'type-on' },
            { id: 14, label: '调节池', class: 'type-on' },
            { id: 15, label: '气浮池', class: 'type-on' },
            { id: 16, label: '中间池', class: 'type-on' },
            { id: 17, label: '厌氧池1', class: 'type-on' },
            { id: 18, label: '厌氧池2', class: 'type-on' },
            { id: 19, label: '好氧池', class: 'type-on' },
            { id: 20, label: '膜池', class: 'type-on' },
            { id: 21, label: '出水', class: 'type-on' }
        ],
        edges: [
            [1, 16],
            [2, 16],
            [3, 17],
            [4, 18],
            [5, 19],
            [6, 19],
            [7, 19],
            [8, 20],
            [9, 20],
            [10, 20],
            [11, 20],
            [12, 20],
            [13, 14],
            [14, 15],
            [15, 16],
            [16, 17],
            [17, 18],
            [18, 19],
            [19, 20],
            [20, 21]
        ],
        errLine: [
        ],
        errNodes: [
        ]
    }

    window.companyGraphs = companyGraphs
})(window)
