# Generated by Django 4.2.3 on 2023-07-20 07:53

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('mapgis', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='surburbs',
            name='id',
        ),
        migrations.AlterField(
            model_name='surburbs',
            name='ogc_fid',
            field=models.IntegerField(primary_key=True, serialize=False, unique=True),
        ),
    ]