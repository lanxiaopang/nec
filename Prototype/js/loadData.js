var chart,
    categories = ['0-4', '5-9', '10-14', '15-19',
        '20-24', '25-29', '30-34', '35-39', '40-44',
        '45-49', '50-54', '55-59', '60-64', '65-69',
        '70-74', '75-79', '80-84', '85-89', '90-94',
        '95-99', '100 +'];

$(function () {
    $( "#m-tabs" ).tabs();
    $( "#m-accordion" ).accordion({
        collapsible: true,
        active: false
    });
    $( "#u-query-button" ).button();
    $( "#u-query-cancel" ).button();
});

<!--highchart-->
$(function () {
    $('#u-tab-sum-con').highcharts({
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false
        },
        title: {
            text: '2014年1月新疆来我市人员户籍地分布'
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: true,
                    color: '#000000',
                    connectorColor: '#000000',
                    format: '<b>{point.name}</b>: {point.percentage:.1f} %'
                }
            }
        },
        series: [{
            type: 'pie',
            name: '人数',
            data: [
                ['乌鲁木齐',   45],
                ['克拉玛依',       26],
                {
                    name: '石河子',
                    y: 12.8,
                    sliced: true,
                    selected: true
                },
                ['哈密',    8],
                ['和田',     6],
                ['其他',   4]
            ]
        }]
    });

    $('#u-tab-trend-con').highcharts({
        chart: {
            type: 'bar'
        },
        title: {
            text: 'Population pyramid for Germany, midyear 2010'
        },
        subtitle: {
            text: 'Source: www.census.gov'
        },
        xAxis: [{
            categories: categories,
            reversed: false
        }, { // mirror axis on right side
            opposite: true,
            reversed: false,
            categories: categories,
            linkedTo: 0
        }],
        yAxis: {
            title: {
                text: null
            },
            labels: {
                formatter: function(){
                    return (Math.abs(this.value) / 1000000) + 'M';
                }
            },
            min: -4000000,
            max: 4000000
        },

        plotOptions: {
            series: {
                stacking: 'normal'
            }
        },

        tooltip: {
            formatter: function(){
                return '<b>'+ this.series.name +', age '+ this.point.category +'</b><br/>'+
                    'Population: '+ Highcharts.numberFormat(Math.abs(this.point.y), 0);
            }
        },

        series: [{
            name: 'Male',
            data: [-1746181, -1884428, -2089758, -2222362, -2537431, -2507081, -2443179,
                -2664537, -3556505, -3680231, -3143062, -2721122, -2229181, -2227768,
                -2176300, -1329968, -836804, -354784, -90569, -28367, -3878]
        }, {
            name: 'Female',
            data: [1656154, 1787564, 1981671, 2108575, 2403438, 2366003, 2301402, 2519874,
                3360596, 3493473, 3050775, 2759560, 2304444, 2426504, 2568938, 1785638,
                1447162, 1005011, 330870, 130632, 21208]
        }]
    });

});