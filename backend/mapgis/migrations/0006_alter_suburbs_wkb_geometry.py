# Generated by Django 4.2.3 on 2023-07-21 06:48

import django.contrib.gis.db.models.fields
from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('mapgis', '0005_rename_surburbs_suburbs'),
    ]

    operations = [
        migrations.AlterField(
            model_name='suburbs',
            name='wkb_geometry',
            field=django.contrib.gis.db.models.fields.GeometryField(null=True, srid=4326),
        ),
    ]
